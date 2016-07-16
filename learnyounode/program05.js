var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filterStr = process.argv[3];

function asyncFileList(dir, filterStr, callback) {
  fs.readdir(dir, function(err, files){
    if (err) return callback(err); // early return
    list = files.filter(function(file){
      return  path.extname(file) === '.' + filterStr;
    });
    callback(null, list);
  });
}

asyncFileList(dir, filterStr, (err,list) => {
    list.forEach(function (file) {
        console.log(file);
    });
});
