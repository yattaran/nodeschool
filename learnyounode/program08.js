var http = require("http");

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');
  var s = "";
  res.on('data', function (chunk) {
    s = s + chunk;
	});
  res.on('end', function () {
    s = s.replace(/\r\n/g,"")
    console.log(s.length)
    console.log(s);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
