(function (app) {

    var automatrService = function ($firebase) {
        var automatrFactory = {};

        var lightswitchRef = new Firebase("https://automatr.firebaseio.com/lightswitch");
        var tempratureRef = new Firebase("https://automatr.firebaseio.com/temprature");
        var brightnessRef = new Firebase("https://automatr.firebaseio.com/brightness");
        var logRef = new Firebase("https://automatr.firebaseio.com/environmentLog")
        
        automatrFactory.getTemprature = function () {
        	return $firebase(tempratureRef);
        };

        automatrFactory.getBrightness = function () {
            return $firebase(brightnessRef);
        };

        automatrFactory.lightswitch = function () {
            return $firebase(lightswitchRef);
        };

        automatrFactory.environmentLog = function () {
        	return $firebase(logRef);
        }
		return automatrFactory
    };

    app.factory("automatrService", ["$firebase", automatrService]);


}(angular.module("ctrlrApp")));