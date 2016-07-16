var http = require("http");
var fs = require("fs");
var port = process.argv[2];

var server = http.createServer((req, res) => {
    var data = "";
    req.on('data', (chunk) => {
        data += chunk;
    });
    req.on('end', () => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data.toUpperCase());
    });
});
server.listen(port);