// Load the http module to create an http server.
var http = require('http');
var host = process.env.VCAP_APP_HOST || 'localhost';
var port = process.env.VCAP_APP_PORT || '3000';

// Configure our HTTP server to respond with Hello World to all requests.
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!\n\n(Powered by CloudFoundry)\n");
}).listen(port, host);

// Put a friendly message on the terminal
console.log("Server running at http://" + host + ":" + port + "/");
