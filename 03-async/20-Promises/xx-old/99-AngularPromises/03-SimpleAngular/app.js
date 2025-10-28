var app = angular.module('app', []);

app.controller('MainController', function ($scope, $q, $timeout) {

    $scope.mydata = "Initial data... ";

    var promise = $q(function (resolve, reject) {

        $timeout(function () {
            resolve("More Data... ");
        }, 3000)
    });

    promise
        .then(function (val) {
            $scope.mydata += val
            return val
        });
    // You can chain on more handlers for the promise.
    //.then(function(val) {
    //  $scope.mydata += val
    //  return val
    //})
    //.then(function(val) {
    //  $scope.mydata += val
    //  return val
    //})
});
