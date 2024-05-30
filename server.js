const http = require('http');
const fs = require('fs');
const path = require('path');

const requestHandler = (request, response) => {
  let filePath = '.' + request.url;
  if (filePath === './') {
    filePath = './login.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  }[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        response.writeHead(404);
        response.end('404 Not Found');
      } else {
        response.writeHead(500);
        response.end('500 Internal Server Error: ' + err.code);
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
};

const server = http.createServer(requestHandler);
const port = 3000;

server.listen(port, (err) => {
  if (err) {
    return console.error('Помилка:', err);
  }
  console.log(`Сервер запущено. Прослуховує порт ${port}`);
});
