var es6denodeify = require('./es6denodeify');

var readFile = es6denodeify(require('fs').readFile);

readFile(process.argv[2], 'utf8').then(function (value) {
    console.log(value.split('\n').length-1);
}).catch(function (error) {
    console.log("Error:" + error);
});
