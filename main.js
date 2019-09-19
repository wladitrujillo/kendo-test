'use strict'


var app = angular.module("my-app", ["kendo.directives"]);

app.controller("MyCtrl", ["$scope", function ($scope) {
    $scope.birthday = new Date();
    $scope.phone = "555 123 4567";
    $scope.cc = "1234 1234 1234 1234"
    $scope.ssn = "003-12-3456";
    $scope.post = "W1N 1AC";
}]);

angular.bootstrap(document.getElementById("my-element"), ["my-app"]);
