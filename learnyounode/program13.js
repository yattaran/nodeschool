var http = require("http");
var url = require("url");
var port = process.argv[2];

var server = http.createServer((req, res) => {
    var reqUrl = url.parse(req.url, true);
    var data = {};
    var unixtime = Date.parse(reqUrl.query.iso);
    if (reqUrl.pathname == "/api/parsetime") {
        var date = new Date(unixtime);
        data.hour = date.getHours();
        data.minute = date.getMinutes();
        data.second = date.getSeconds();
    } else if (reqUrl.pathname == "/api/unixtime") {
        data.unixtime = unixtime;
    }
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});
server.listen(port);