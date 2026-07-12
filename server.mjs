// Production server for fraimer.dev
//
// TanStack Start builds a Web `fetch` handler at dist/server/server.js — it does
// not listen on a port by itself. This entry wraps that handler with srvx (the
// same server runtime Start uses in dev) so it can run as a long-lived Node
// process under pm2. Static client assets from dist/client are served directly,
// so the process is self-sufficient even if nginx isn't short-circuiting them.

import { serve } from "srvx";
import { serveStatic } from "srvx/static";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import handler from "./dist/server/server.js";

const root = dirname(fileURLToPath(import.meta.url));
const clientDir = join(root, "dist", "client");

const port = Number(process.env.PORT) || 7000;
const hostname = process.env.HOST || "127.0.0.1"; // behind nginx; not exposed directly

serve({
  port,
  hostname,
  // Serve hashed client assets / public files first, fall through to SSR.
  middleware: [serveStatic({ dir: clientDir })],
  fetch: handler.fetch,
});

console.log(`fraimer.dev listening on http://${hostname}:${port}`);
