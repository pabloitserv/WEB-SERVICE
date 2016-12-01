const dao = require('../dao/user.dao.js');
const uId = require('uid');
let cache = [];

function getSession(req, res, next) {
    return res.json({ controller: 'getSession' });
}

function getSessionUser(req, res, next) {
    let user = cache.filter(c => c.key == req.params.token)[0];
    return res.json(user);
}

function createSession(req, res, next) {
    dao.findOneUser(req.params, {}).exec((err, data) => {
        let key;

        if (!err) {
            key = uId(15);
            cache.push({ key: key, value: data });
        }

        return res.json(!key ? err : { token: key });
    });
}

module.exports = {
    get: getSession,
    getUser: getSessionUser,
    post: createSession
}