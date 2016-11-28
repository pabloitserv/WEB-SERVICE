var db = require('./config/db.config.js');
var conf = require('./config/constants.js');
var attachRoute = require('./config/routes.js');
var express = require('express');
var bodyParser = require('body-parser');
var restify = require('restify');


var app = express();

attachRoute(app);

app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Contrll-Allow-Headers', 'X-Request-With, content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.jsonp());


app.use((req, res, next) => {
    let user = cache.filter(c => c.key == req.params.token)[0];

    if (user)
        req.user = user.value

    next();
})



app.listen(conf.port, function() {
    console.log("Server running in port " + conf.port + " !");
});