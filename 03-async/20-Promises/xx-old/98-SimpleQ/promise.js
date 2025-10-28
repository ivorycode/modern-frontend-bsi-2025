
var Q = require("q");

// TODO: Show difference between then(success/failure) and catch(error) - when to combine
promiseMeSomething()
    .then(function (value) {
        console.log("Promise resolved! " + value);
    }, function (reason) {
        console.log("Promise rejected! " + reason);
    });


function promiseMeSomething(){

    // Create a promise
    var deferred = Q.defer();

    // resolve the promise in the future
    setTimeout(function(){ deferred.resolve("Success!")}, 1000);

    // return the promise now to the client
    return deferred.promise;
}
