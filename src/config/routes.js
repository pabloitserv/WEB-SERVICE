const constants = require('./constants.js');
const sessionControl = require('../controller/session.control.js');
const userControl = require('../controller/user.control.js');


const attachRoute = module.exports = (app) => {
    //SESSION ROUTE
    app.get(constants.session_user, sessionControl.getUser);
    app.get(constants.session, sessionControl.get);
    app.get(constants.session, sessionControl.post);

    //RUN ROUTE
    app.post(constants.user_mongo, userControl.post);
    app.put(constants.data_base, userControl.put);



    // RETURN
    return app;
}