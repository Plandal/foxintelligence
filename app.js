var express = require('express');
var app = express();
var server = require('http').createServer(app);



app.use("/web", express.static(__dirname + "/web"));

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(8080);