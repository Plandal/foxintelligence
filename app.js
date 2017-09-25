var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');

app.use("/web", express.static(__dirname + "/web"));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/upload', function (req, res) {
    console.log('req = ',req);
    res.send(true);
});

app.listen(8080);