const dao = require('../dao/user.dao.js');
const uId = require('uid');
const conf = require('../config/constants.js');


function getSession(req, res, next) {
    return res.json({ controller: 'getSsession' });
}

function getSessionUser(req, res, next) {
    let user = conf.cache.filter(c => c.key == req.params.token[0]);
}

function createSession(req, res, next) {
    dao.findOneUser(req.params, {})
        .exec((err, data) => {
            let key;

            if (!err) {
                key = uId(99);
                conf.cache.push({ key: key, value: data })
            }

            return res.json(!key ? err : { token: key });
        })
}

module.exports = {
    get: getSession,
    getUser: getSessionUser,
    post: createSession
}