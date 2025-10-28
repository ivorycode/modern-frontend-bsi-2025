var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {

    $http.get("https://api.github.com/repos/angular/angular.js/commits")
        .then(function (response) {
            $scope.mydata = response.data;
        }
        //, function (data, status, headers, config) {
        //    $scope.mydata = "Something went wrong!";
        //}
        )
        .catch(function (response) {
            $scope.mydata = "Something went wrong: " + response.status;
        });


    $scope.mydata = "Waiting ...";

    // instead of 'then' you can use the 'success' and 'error' functions on $http
    //$http.get("https://api.github.com/repos/angular/angular.js/commits")
    //    .success(function (data, status, headers, config) {
    //        $scope.mydata = data;
    //    })
    //    .error(function (data, status, headers, config) {
    //        $scope.mydata = "Something went wrong!";
    //    });

});
