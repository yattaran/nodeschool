var net = require("net");
var port = process.argv[2];

var server = net.createServer(function (socket) {
    var date = new Date();
    var data = date.getFullYear() 
    + "-" + ('0' + (date.getMonth()+1)).slice(-2)
    + "-" + ('0' + date.getDate()).slice(-2)
    + " " + ('0' + date.getHours()).slice(-2)
    + ":" + ('0' + date.getMinutes()).slice(-2)
    + "\n";
    socket.end(data);
});
server.listen(port);