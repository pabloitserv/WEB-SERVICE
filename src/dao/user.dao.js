const mongoose = require('mongoose');
const Model = mongoose.model('User');

const createUser = (user) => new Model(user);
const findUser = (query, opt) => Model.find(query, opt);
const findOneUser = (query, opt) => Model.findOne(query, opt);
const deleteUser = (query) => Model.remove(query);
const findOneUserAndUpdate = (query, mod) => Model.update(query, mod);

module.exports = {
    createUser: createUser,
    findUser: findUser,
    findOneUser: findOneUser,
    deleteUser: deleteUser,
    findOneUserAndUpdate: findOneUserAndUpdate
}