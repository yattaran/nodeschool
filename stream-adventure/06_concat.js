var concatStream = require('concat-stream');

var reverse = (data) => {
    process.stdout.write(data.toString().split("").reverse().join(""));
}

process.stdin
.pipe(concatStream(reverse));
