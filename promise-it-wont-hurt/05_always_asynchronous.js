
'use strict';

var promise = new Promise(function(fulfill, reject) {
    fulfill("PROMISE VALUE");
});

promise.then(
    function(val) {
        console.log("MAIN PROGRAM");
        console.log(val);
    });