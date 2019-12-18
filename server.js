var http = require('http')

var port = 4000

var os = require("os");

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World build test! Foobar \n' + os.hostname())
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
