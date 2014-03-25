(function () {
    
    angular.module("instaApp", []);

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'festreisen',
        clientId: 'c61ef3d655994bca9882f13621e54cfd',
        limit: 16,
        resolution: 'low_resolution'
    });
    feed.run();
    setInterval(function () {
    	feed.run();
    }, 30000);
}());