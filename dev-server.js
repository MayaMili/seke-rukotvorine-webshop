// ── Lokalni dev server (bez Vercela, bez dependencija) ──
// Servira statički frontend + /api/send-order-emails na istom portu,
// baš kao Vercel u produkciji. Pokretanje:  node dev-server.js
//
// Učita varijable iz .env PRIJE nego require-a API handler
// (handler čita GMAIL_USER itd. na vrhu modula).

const http = require('http');
const fs   = require('fs');
const path = require('path');

// ── 1) Učitaj .env u process.env ──
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  console.log('✓ .env učitan');
} else {
  console.warn('⚠ .env ne postoji — slanje maila neće raditi lokalno.');
}

// ── 2) Tek sad require-aj API handler ──
const apiHandler = require('./api/send-order-emails.js');

const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg':  'image/jpeg', '.jpeg': 'image/jpeg',
  '.png':  'image/png',  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon', '.webp': 'image/webp', '.gif': 'image/gif',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);

  // ── API ruta ──
  if (urlPath === '/api/send-order-emails') {
    let raw = '';
    req.on('data', c => { raw += c; });
    req.on('end', () => {
      try { req.body = raw ? JSON.parse(raw) : {}; } catch (e) { req.body = {}; }
      // Shim Express/Vercel-stila res metoda koje handler koristi
      res.status = (code) => { res.statusCode = code; return res; };
      res.json   = (obj)  => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(obj)); };
      Promise.resolve(apiHandler(req, res)).catch(err => {
        console.error('Handler greška:', err);
        if (!res.headersSent) { res.statusCode = 500; res.end('Interna greška'); }
      });
    });
    return;
  }

  // ── Statički fajlovi + cleanUrls (npr. /category -> category.html) ──
  let rel = urlPath === '/' ? '/index.html' : urlPath;
  let file = path.join(__dirname, rel);

  if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html';

  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.statusCode = 404;
    res.end('404 — nije pronađeno: ' + rel);
    return;
  }

  const ext = path.extname(file).toLowerCase();
  res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, () => {
  console.log('\n  Frontend + backend rade na:  http://localhost:' + PORT + '\n');
});
