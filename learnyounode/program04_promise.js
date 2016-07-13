function lineCount(filename) {
    return new Promise(function (resolve, reject) {
      require('fs').readFile(filename, 'utf8', function(err, text) {
        resolve(text.split('\n').length-1);
        reject(err);
    });
  });
}

lineCount(process.argv[2]).then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log("Error:" + error);
});
