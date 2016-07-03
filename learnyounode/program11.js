var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var localPath = process.argv[3];

var server = http.createServer(function (req, res) {    
    var readStream = fs.createReadStream(localPath);
    readStream.on('data', function(data) {
        res.end(data);
    });
    // OR
    // res.writeHead(200, { 'content-type': 'text/plain'});
    // fs.createReadStream(localPath).pipe(res);
});
server.listen(port);