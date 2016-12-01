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
                    console.log("Ativos: " + user.name);

                    /*
                    dao.deleteUser({ "cpf": user.cpf })
                        .exec((err, data) => {
                            if (err) return res.json(err);
                            console.log("Active: " + user.name);
                            return res.json("User active", user.name);

                        });*/
                } else {
                    console.log("Removidos: " + user.name);
                    /*  dao.createUser(user)
                          .save((err, data) => {
                              if (err) return res.json(err);
                              console.log("Updated: " + user.name);
                              return res.json("User updated", user.name);
                          })*/
                }
            });
        });


}
module.exports = {
    post: createUserInMongo
}