const mongoose = require('mongoose');
const Model = mongoose.model('Run');

const createRun = (run) => new Model(run);
const findRun = (query, opt) => Model.find(query, opt).populate('user', 'name');
const findOneRun = (query, opt) => Model.findOne(query, opt);
const deleteRun = (query) => Model.delete(query);

module.exports = {
    createRun: createRun,
    findRun: findRun,
    findOneRun: findOneRun,
    deleteRun: deleteRun
}