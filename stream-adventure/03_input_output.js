var through2 = require('through2');

var trans = through2.obj(function(chunk, enc, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
});


process.stdin
.pipe(trans)
.pipe(process.stdout);
