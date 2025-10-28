var app = angular.module('app', []);

app.controller('MainController', function ($scope, $q, $timeout) {

    $scope.mydata = "Initial data... ";

    $q(function (resolve, reject) {
        $timeout(function () {
            resolve('More Data... ');
        }, 1000);
    })

        .then(function (val) {
            $scope.mydata += val;
            return $q(function (resolve, reject) {
                $timeout(function () {
                    resolve('Even more data!');
                }, 1000);
            });
        })
        .then(function (val) {
            $scope.mydata += val;
        });


});
