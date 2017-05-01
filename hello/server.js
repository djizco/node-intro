// Create a Server that responds to HTTP requests with 'Hello World'

// Import the HTTP module
const http = require('http');

// Set the port and host for the server
const port = process.env.PORT || 3000;
const host = '127.0.0.1';

// Create an HTTP server that handles all requests
const server = http.createServer((request, response) => {
  // Your code here
  // Set the Header to reply with text/plain

  // Respond to all requests with 'Hello World'

});

// Have the server listen on the desired port and host
