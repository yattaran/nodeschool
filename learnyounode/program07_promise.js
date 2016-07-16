var http = require("http");

function httpGetData(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.setEncoding('utf8');
            var chunks = [];
            res.on('data', (chunk) => {
                chunks.push(chunk);
            });
            res.on('end', () => { 
                resolve(chunks);
            });
        }).on('error', (e) => {
            reject("Got error: " + e.message);
        });
    });
}

httpGetData(process.argv[2])
    .then((data) => {
        data.forEach((_) => {
            console.log(_);
            })
    })
    .catch((error) => { console.log(error)});

