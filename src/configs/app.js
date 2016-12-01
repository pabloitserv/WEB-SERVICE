//let express = require('express');
let restify = require('restify');
//let bodyParser = require('body-parser');
let port = process.env.PORT || 7970;

let app = module.exports = restify.createServer();

app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.jsonp());

const cors = () => (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
};

app.listen(port, function() {
    console.log('Server Running in port ' + port + '!');
});