const http = require('http')
const os = require("os");
const execSync = require('child_process').execSync;

const port = 4000

const server = http.createServer(function (request, response) {
  const data = execSync("df -h");
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World build test! Foobar \n' + os.hostname() + '\n' + data.toString())
})

server.listen(port)

console.log(`Server running at port: ${port}`)
