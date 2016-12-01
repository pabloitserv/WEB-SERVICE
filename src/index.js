const app = require('./configs/app.js');
const db = require('./configs/db.config.js');
const User = require('./schemas/user.schema.js');
const Run = require('./schemas/run.schema.js');

const userCtrl = require('./controllers/userControl.js');
const sessionCtrl = require('./controllers/sessionControl.js');
const runCtrl = require('./controllers/runControl.js');




//Session
app.get('/session/user', sessionCtrl.getUser);
app.get('/session', sessionCtrl.get);
app.post('/session', sessionCtrl.post);
//=============================================
// Rotas
app.post('/user/populate', userCtrl.post);
app.put('/user', userCtrl.put);
//=============================================
//Run
app.get('/run', runCtrl.get);
app.post('/run', runCtrl.post);
//=============================================