const app = require('./configs/app.js');
const db = require('./configs/db.config.js');
const User = require('./schemas/user.schema.js');
const userCtrl = require('./controllers/userControl.js');

app.get('/', function(req, res, next) {
    console.log('OOOOOO');
    res.send('OKOKOKOKO');
    res.end();
});

app.post('/user/populate', userCtrl.post);