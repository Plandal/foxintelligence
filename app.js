var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var foxintelligence = require('./modules/foxintelligence');
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');

app.use("/web", express.static(__dirname + "/web"));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/upload', function (req, res) {
//    console.log('req = ',req.body);
    if (req.body) {
        foxintelligence.htmlToJson(req.body);
    } else {
        res.sendStatus(400)
    }
//    var data = fs.readFileSync('input.txt');
    res.send(true);
});



app.listen(8080);