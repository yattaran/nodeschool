var through2 = require('through2');
var split = require('split');

var count = 1;
var trans = through2.obj(function(chunk, enc, callback) {
    var line = chunk.toString();
    if (count % 2 == 0) line = line.toUpperCase();
    else line = line.toLowerCase(); 
    this.push(line + '\n');
    count++;
    callback();
});


process.stdin
.pipe(split())
.pipe(trans)
.pipe(process.stdout);
