(function () {
    
    angular.module("instaApp", []);

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'cat',
        clientId: 'c61ef3d655994bca9882f13621e54cfd',
        limit: 30,
        resolution: 'low_resolution'
    });
    feed.run();
}());

(function () {
    if (!String.prototype.format) {
        var regexes = {};
        String.prototype.format = function (parameters) {
            for (var formatMessage = this, args = arguments, i = args.length; --i >= 0;)
                formatMessage = formatMessage.replace(regexes[i] || (regexes[i] = RegExp("\\{" + (i) + "\\}", "gm")), args[i]);
            return formatMessage;
        };
        if (!String.format) {
            String.format = function (formatMessage, params) {
                for (var args = arguments, i = args.length; --i;)
                    formatMessage = formatMessage.replace(regexes[i - 1] || (regexes[i - 1] = RegExp("\\{" + (i - 1) + "\\}", "gm")), args[i]);
                return formatMessage;
            };
        }
    }
})();