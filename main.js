var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var https = require("https");
var fs = require('fs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("*", function(req, res){
    res.send(req.url);
    console.log(req.url);
    res.end();
});

app.post("*", urlencodedParser, function(req, res){
    res.send(r.body);
    console.log(req.body);
    res.end();
});

var options = {
    key: fs.readFileSync("cert/cert.key"),
    cert: fs.readFileSync("cert/cert.crt")
};

//Because we're listening on low port, need to run with su/Admin
https.createServer(options, app).listen(443);