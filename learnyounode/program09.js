var http = require("http");

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

var results = [];
var resultCnt = 0;

urls.forEach(function (url) {
  var s = [];
  results.push(s);
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      s.push(chunk);
	  });
    res.on('end', function () {
      resultCnt = resultCnt + 1;
      if (resultCnt == 3) {
        results.forEach(function (result) {
          var c = "";
          result.forEach(function (_1) {
            c = c + _1;
          });
          console.log(c.replace(/\r\n/g,""));
        });
      }
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
});
