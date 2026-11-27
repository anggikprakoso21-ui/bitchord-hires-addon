
import { createServer } from 'node:http';
import { httpServerHandler } from 'cloudflare:node';
import handler from './api/index.js';

const server = createServer((req, res) => {
  handler(req, res).catch((err) => {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      error: String(err?.message || err)
    }));
  });
});

export default httpServerHandler(server);
