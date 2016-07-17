var through2 = require('through2');

var trans = through2.obj(function(chunk, enc, callback) {
    var line = chunk.toString();
    line = line.toUpperCase();
    this.push(line);
    callback();
});


process.stdin
.pipe(trans)
.pipe(process.stdout);
