const http = require('http');
const colors = require('colors');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('<h1>Hola mundo</h1>');
//     response.end();
//   }).listen(2000);

const handleServer = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hola mundo</h1>');
  res.end();
}

const server = http.createServer(handleServer);

server.listen(2000, function(){
  console.log('Server on port 2000'.yellow);
});