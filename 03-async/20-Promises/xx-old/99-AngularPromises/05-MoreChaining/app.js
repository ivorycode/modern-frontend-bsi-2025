var app = angular.module('app', []);

app.controller('MainController', function ($scope, $q, $timeout) {

    $scope.mydata = "Initial data... ";

    var getUser = function(){

        return $q(function(resolve, reject){
            $timeout(function(){
                resolve("User...")}, 2000);
        });
    };

    var getUserData = function(val){
        $scope.mydata += val;

        return $q(function(resolve, reject){
            $timeout(function(){
                resolve("User Data...")}, 2000);
        });
    };

    var updateUserData = function(val){
        $scope.mydata += val;

        return $q(function(resolve, reject){
            $timeout(function(){
                resolve("Updated Data...")}, 2000);
        });
    };

    var requestFinished = function(){
        $scope.mydata += "Request Finished";
    };

    var errorHandler = function(){
        alert("Something went wrong!");
    };

    getUser()
        .then(getUserData)
        .then(updateUserData)
        .catch(errorHandler)
        .finally(requestFinished);

});
