// pm2 process definition for fraimer.dev
// Usage on the VPS:
//   pm2 start ecosystem.config.cjs
//   pm2 save            # persist across reboots (after pm2 startup)
//   pm2 reload fraimer  # zero-downtime reload after a new build

module.exports = {
  apps: [
    {
      name: "fraimer",
      script: "server.mjs",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: 7000,
        HOST: "127.0.0.1",
      },
      max_memory_restart: "512M",
      autorestart: true,
      // Logs land in ~/.pm2/logs by default; override here if you want a fixed path.
    },
  ],
};
