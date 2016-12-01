const User = require('../schemas/user.schema.js');
const request = require('superagent');
const dao = require('../dao/user.dao.js');


function createUserInMongo(req, res, next) {
    request
        .get('https://restfull-pablo440.c9users.io/login')
        .set('Accept', 'application/json')
        .end((err, response) => {

            if (err) return;

            let users = JSON.parse(response.text);

            users.forEach(user => {
                if (user.active) {

                    dao.createUser(user).save((err, data) => {
                        if (err) {
                            return res.json(err);
                        } else {
                            console.log("Ativos: " + user.name + "=>");
                            return res.json(user.name);
                        }
                    });
                } else {
                    console.log("Removidos: " + user.name + " X ");
                    dao.deleteUser({ "cpf": user.cpf }).exec((err, data) => {
                        if (err) {
                            return res.json(err);
                        } else {
                            return res.json(user.name);
                        }
                    });
                }
            });
            res.end();
        });
}

function updateUser(req, res, next) {
    var query = {
        _id: req.params.id
    }
    var mod = {
        "$set": { "password": req.params.password }
    }
    dao.findOneUserAndUpdate(query, mod).exec((err, data) => {
        return res.json(err ? err : data);
    });
}

module.exports = {
    post: createUserInMongo,
    put: updateUser
}