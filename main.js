var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function(req, res){
    res.send(req.url);
    console.log(req.url);
    res.end();
});

app.post("/", urlencodedParser, function(req, res){
    res.send(r.body);
    console.log(req.body);
    res.end();
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});