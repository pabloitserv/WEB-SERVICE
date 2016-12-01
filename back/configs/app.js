//let express = require('express');
let restify = require('restify');
//let bodyParser = require('body-parser');


let app = module.exports = restify.createServer();

app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.jsonp());

app.listen(7970, function() {
    console.log('KOKOKOKOKOKOKOKOOKOKKOKOKOKOK');
});