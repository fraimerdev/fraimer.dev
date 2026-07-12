# Deploying fraimer.dev to a VPS (pm2 + nginx)

This app is [TanStack Start](https://tanstack.com/start). `bun run build` (or `npm run build`)
produces a Web `fetch` handler at `dist/server/server.js` — it does **not** listen on a port
by itself. `server.mjs` wraps it with [srvx](https://srvx.h3.dev) so it can run as a long-lived
Node process under pm2. nginx terminates TLS and reverse-proxies to it.

```
Internet ──HTTPS──▶ nginx (:443) ──proxy──▶ Node/pm2 (127.0.0.1:7000) ── SSR
                      └── serves dist/client/* (assets) straight from disk
```

Everything below runs **on the VPS** over SSH, except step 0 which you do locally.

---

## 0. Locally: commit & push

The new/changed files are `server.mjs`, `ecosystem.config.cjs`, `deploy/nginx/fraimer.dev.conf`,
`package.json` (added `srvx`, fixed `start`), and this guide. Install once so the lockfile picks
up `srvx`, then push:

```bash
bun install          # updates bun.lock with srvx
git add -A
git commit -m "Add VPS deploy config (pm2 + nginx)"
git push
```

## 1. DNS

Point both records at your VPS IP:

| Type | Name | Value        |
|------|------|--------------|
| A    | @    | <VPS_IP>     |
| A    | www  | <VPS_IP>     |

Wait for propagation (`dig +short fraimer.dev` should return your IP) before requesting certs.

## 2. Server prerequisites (once per box)

```bash
# Node 20+ (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx

# pm2 + (optional) bun
sudo npm install -g pm2
curl -fsSL https://bun.sh/install | bash    # optional; npm works fine too

# certbot for Let's Encrypt
sudo apt-get install -y certbot python3-certbot-nginx
```

## 3. Get the code onto the box

```bash
sudo mkdir -p /var/www
sudo chown "$USER" /var/www
git clone https://github.com/fraimerdev/fraimer.dev.git /var/www/fraimer.dev
cd /var/www/fraimer.dev
```

> The nginx config expects the repo at `/var/www/fraimer.dev`. If you deploy elsewhere,
> update the `root` line in `deploy/nginx/fraimer.dev.conf` to `<your_path>/dist/client`.

## 4. Build

```bash
bun install && bun run build      # or: npm install && npm run build
```

This creates `dist/client/` (static assets) and `dist/server/server.js` (SSR handler).

## 5. Start under pm2

```bash
pm2 start ecosystem.config.cjs
pm2 save                          # snapshot the process list
pm2 startup                       # prints a command — run it to enable boot startup
```

Quick local check that the app answers before wiring nginx:

```bash
curl -sI http://127.0.0.1:7000/ | head -1   # expect HTTP/1.1 200 OK
```

## 6. TLS certificate

Issue the cert first (uses nginx's default site to answer the challenge on port 80):

```bash
sudo certbot certonly --nginx -d fraimer.dev -d www.fraimer.dev
```

This creates `/etc/letsencrypt/live/fraimer.dev/{fullchain,privkey}.pem`, which the site
config references. Renewal is automatic via certbot's systemd timer.

## 7. Enable the nginx site

```bash
sudo cp deploy/nginx/fraimer.dev.conf /etc/nginx/sites-available/fraimer.dev
sudo ln -sf /etc/nginx/sites-available/fraimer.dev /etc/nginx/sites-enabled/fraimer.dev
sudo rm -f /etc/nginx/sites-enabled/default   # drop the default site if present
sudo mkdir -p /var/www/certbot                # webroot for renewal challenges
sudo nginx -t && sudo systemctl reload nginx
```

Open https://fraimer.dev — you should get the SSR home page over HTTPS, with `www` and
plain-HTTP both redirecting to it.

## 8. Firewall (if using ufw)

```bash
sudo ufw allow 'Nginx Full'   # 80 + 443
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## Redeploying after a change

```bash
cd /var/www/fraimer.dev
git pull
bun install            # only if deps changed
bun run build
pm2 reload fraimer     # zero-downtime restart
```

## Operations cheatsheet

```bash
pm2 status                 # process state
pm2 logs fraimer           # tail app logs
pm2 reload fraimer         # restart after a rebuild
sudo tail -f /var/log/nginx/error.log
sudo nginx -t              # validate config before reload
```

## Config reference

| Setting        | Where                       | Default              |
|----------------|-----------------------------|----------------------|
| App port       | `ecosystem.config.cjs` PORT | `7000` (loopback)    |
| Bind host      | `ecosystem.config.cjs` HOST | `127.0.0.1`          |
| Deploy path    | `deploy/nginx/…` `root`     | `/var/www/fraimer.dev` |
| Node version   | `package.json` engines      | `>=20`               |

The app binds to `127.0.0.1` only — it is never exposed to the internet directly; all
public traffic goes through nginx.
