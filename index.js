const http = require('http');

const handleServer = http.createServer(function (req, res) {
    res.writeHead(200)
    res.write("<h1>hola </h1>");
    res.end();
});

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log
});