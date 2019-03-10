const express = require('express');
const compression = require('compression');
const {join} = require('path');
const {parse} = require('url');
const next = require('next');
const fs = require('fs').promises;

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3001;
const app = next({dev, dir: dev ? 'src' : './.next'});

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get('*', async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const {pathname} = parsedUrl;
    const rootStaticFiles = ['/favicon.ico', '/site.webmanifest', '/apple-touch-icon.png'];

    if (pathname.includes('/service-worker.js')) {
      try {
        const filePath = join(__dirname, '.next', 'service-worker.js');
        const file = await fs.readFile(filePath);
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(file);
        res.end();
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.log(error);
        res.end(req);
      }
    } else if (pathname.includes('/robots.txt')) {
      try {
        const filePath = join(__dirname, 'static', 'robots.txt');
        const file = await fs.readFile(filePath);
        res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
        res.write(file);
        res.end();
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.log(error);
        res.end(req);
      }
    } else if (rootStaticFiles.includes(pathname)) {
      const pathResolved = join(__dirname, '/static', parsedUrl.pathname);
      app.serveStatic(req, res, pathResolved);
    } else {
      handler(req, res, parsedUrl);
    }
  });

  server.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
