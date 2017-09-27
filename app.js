var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var foxintelligence = require('./modules/foxintelligence')

app.set('view engine', 'ejs');

app.use("/web", express.static(__dirname + "/web"));

app.get('/', function (req, res) {
    res.render('index');
});
//
//app.post('/upload', function (req, res) {
//    console.log('req = ',req.body);
////    var data = fs.readFileSync('input.txt');
//    res.send(true);
//});

foxintelligence.htmlToJson('./docs/test.html');

app.listen(8080);