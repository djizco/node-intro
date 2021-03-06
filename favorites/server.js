const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

const pathname = path.join(__dirname, 'favorites.json');
const encoding = 'utf-8';

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  // GET method returns the current list of favorites
  if (request.method === 'GET') {
    // Your code here

    response.end(JSON.stringify({ message: 'GET successful', favorites }));
  }

  // POST method adds a favorite to the end of the list of favorites
  // Returns the updated list of favorites
  if (request.method === 'POST') {
    let body = '';
    request.on('data', data => { body += data; });
    request.on('end', () => {
      request.body = JSON.parse(body);
      // You now have access to request.body
      // Your code here

      response.end(JSON.stringify({ message: 'POST successful', favorites }));
    });
  }

  // DELETE method deletes the last favorite from the list of favorites
  // Returns the updated favorites and the deleted item
  if (request.method === 'DELETE') {
    // Your code here

    response.end(JSON.stringify({ message: 'DELETE successful', favorites, deleted }));
  }
});

server.listen(port, hostname, () => console.log(`server is listening on port ${port}`));
