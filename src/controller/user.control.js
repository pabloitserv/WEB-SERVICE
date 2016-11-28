const dao = require('../dao/user.dao.js');
const request = require('superagent');

function createUserOnMongo(req, res, next) {
    request
        .get('https://restfull-pablo440.c9users.io/login')
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return;

            let users = JSON.parse(response.text);
            users.forEach(users => {
                if (!user.active) {
                    dao.deleteUser({ cpf: user.cpf })
                        .exec((err, data) => {
                            if (err) return res.json(err);
                            return res.json("User deactiveted");
                        });
                } else {
                    dao.createUser(user)
                        .save((err, data) => {
                            if (err) return res.json(err);
                            return res.json("User updated", user.name);
                        });
                }
            });
        });
}

function updateUser(req, res, next) {
    var query = {
        _id: req.params.id
    }
    var mod = {
        "$set": { password: req.params.password }
    }

    dao.findOneUserAndUpdate(query, mod)
        .exec((err, data) => {
            return res.json(err ? err : data);
        })


}

module.exports = {
    post: createUserOnMongo,
    put: updateUser
}