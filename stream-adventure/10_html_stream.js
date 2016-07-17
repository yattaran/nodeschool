var trumpet = require('trumpet');
var through2 = require('through2');

var trans = through2.obj(function(chunk, enc, callback) {
    var line = chunk.toString();
    line = line.toUpperCase();
    this.push(line);
    callback();
});
var trump = trumpet();

var loudStream = trump.select('.loud').createStream();
loudStream.pipe(trans).pipe(loudStream);

process.stdin.pipe(trump).pipe(process.stdout);
