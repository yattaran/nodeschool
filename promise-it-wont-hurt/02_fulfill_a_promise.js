'use strict';

var promise = new Promise(function(fulfill, reject) {
    setTimeout(function() {
        fulfill();
    }, 300);
});

promise.then(function(){console.log('FULFILLED!')});