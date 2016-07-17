var http = require('http');
var through2 = require('through2');

var port = process.argv[2];

var trans = through2.obj(function(chunk, enc, callback) {
    var line = chunk.toString();
    line = line.toUpperCase();
    this.push(line);
    callback();
});

var server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(trans).pipe(res);
    } else {
        res.end('');
    };
});
server.listen(port);