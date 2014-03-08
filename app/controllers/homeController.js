(function(app) {

    var homeController = function($scope, $http) {       
        $scope.message = "Hello world!"
    };

app.controller("homeController", ['$scope', '$http', homeController]);
    
}(angular.module("instaApp")))

