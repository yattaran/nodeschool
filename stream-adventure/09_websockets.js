var ws = require('websocket-stream');
var readable = require('stream').Readable;

var reader = new readable;

var webSockets = ws('ws://localhost:8099');
reader.pipe(webSockets);

reader.push('hello\n');
reader.push(null);
