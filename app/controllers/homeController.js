(function(app) {

    var homeController = function($scope, $http) {       
        $scope.message = "Hello world!";
        $scope.tag =  "festreisen"

        var feed = new Instafeed({
        get: 'tagged',
        tagName: $scope.tag,
        clientId: 'c61ef3d655994bca9882f13621e54cfd',
        limit: 16,
        resolution: 'low_resolution',
        template: '<div class="imageContainer"><a href="{{link}}"><img src="{{image}}" /></a><div class="caption">{{caption}}</div></div>'
    });
    feed.run();
    setInterval(function () {
    	feed.run();
    }, 30000);
    };

app.controller("homeController", ['$scope', '$http', homeController]);
    
}(angular.module("instaApp")))

