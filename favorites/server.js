const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';
const pathname = path.join(__dirname, 'favorites.json');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  // GET method returns the list of favorites
  if (request.method === 'GET') {
    // Your code here
    let favorites = fs.readFileSync(pathname, 'utf-8');
    favorites = JSON.parse(favorites);
    response.end(JSON.stringify({ message: 'Get successful', favorites }));
  }

  // POST method adds a favorite to the end of the list of favorites
  if (request.method === 'POST') {
    let body = '';
    request.on('data', data => { body += data; });
    request.on('end', () => {
      request.body = JSON.parse(body);
      // You now have access to request.body
      // Your code here
      let favorites = fs.readFileSync(pathname, 'utf-8');
      favorites = JSON.parse(favorites);
      favorites.push(request.body);
      fs.writeFileSync(pathname, JSON.stringify(favorites));
      response.end(JSON.stringify({ message: 'POST successful', favorites }));
    });
  }

  // DELETE method deletes the last favorite from the list of favorites
  if (request.method === 'DELETE') {
    // Your code here
    let favorites = fs.readFileSync(pathname, 'utf-8');
    favorites = JSON.parse(favorites);
    const deleted = favorites.pop();
    fs.writeFileSync(pathname, JSON.stringify(favorites));
    response.end(JSON.stringify({ message: 'Delete successful', favorites, deleted }));
  }

  // PUT method updates favorite list with a new list
  if (request.method === 'PUT') {
    let body = '';
    request.on('data', data => { body += data; });
    request.on('end', () => {
      request.body = JSON.parse(body);
      // You now have access to request.body
      // Your code here
      const favorites = request.body;
      fs.writeFileSync(pathname, JSON.stringify(favorites));
      response.end(JSON.stringify({ message: 'Update successful', favorites }));
    });
  }
});

server.listen(port, hostname, () => console.log(`server is listening on port ${port}`));
