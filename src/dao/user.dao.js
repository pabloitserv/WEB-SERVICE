const mongoose = require('mongoose');
const sch = require('../schema/user.schema.js');

const Model = mongoose.model('User');

const createUser = (user) => new Model(sch.user);
const findUser = (query, opt) => Model.find(query, opt);
const finsOneUser = (query, opt) => Model.findOne(query, opt);
const deleteUser = (query) => Model.remove(query);
const finOneUserAndUpdate = (query, mod) => Model.update(query, mod);

module.exports = {
    createUser: createUser,
    findUser: findUser,
    finsOneUser: finsOneUser,
    deleteUser: deleteUser,
    finOneUserAndUpdate: finOneUserAndUpdate
}