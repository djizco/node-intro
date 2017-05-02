// Using your knowledge from the previous exercises,
// create an HTTP server that responds to all requests with the contents of 'array.json'
// set the header to respond with Content-Type: application/json
const fs = require('fs');
const http = require('http');
const path = require('path');

const pathname = path.join(__dirname, 'array.json');
const encoding = 'utf-8';

const port = process.env.PORT || 3000;
const host = '127.0.0.1';

const server = http.createServer((request, response) => {
  // Your code here
});

server.listen(port, host, () => console.log(`server is listening on port ${port}`));
