
var conf = require('./constants.js');

var express = require('express');
var bodyParser = require('body-parser');



var app = module.exports = express();



app.use( function ( req, res, next ){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Contrll-Allow-Headers', 'X-Request-With, content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(conf.port, function() {
    console.log("Server running in port " + conf.port + " !");
});
