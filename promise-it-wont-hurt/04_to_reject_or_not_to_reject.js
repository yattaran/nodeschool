
'use strict';

var promise = new Promise(function(fulfill, reject) {
    fulfill();
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(
    function() {console.log("I FIRED")},
    onReject);