// Using your knowledge from the previous exercises,
// create an HTTP server that responds to all requests with the contents of 'array.json'
// set the header to respond with Content-Type: application/json
const fs = require('fs');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  const arrayString = fs.readFileSync(path.join(__dirname, 'array.json'), 'utf-8');
  response.end(arrayString);
});

server.listen(port, host, () => console.log(`server is listening on port ${port}`));
