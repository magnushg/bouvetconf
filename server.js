var express = require("express"),
	app = express(),
	port = process.env.PORT || 1977;
    

app.use("/app", express.static(__dirname + "/app"));
app.use("/vendor", express.static(__dirname + "/vendor"));
app.use("/content", express.static(__dirname + "/content"));

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.get('/wall', function(req, res) {
	res.sendfile('fullwall.html');
});

app.listen(port);
console.log("Server started on port " + port);