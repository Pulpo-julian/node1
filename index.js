const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200)
    res.write("<h1>hola </h1>");
    res.end();
}).listen(3000);