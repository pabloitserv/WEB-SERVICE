const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: Number,
        default: null
    },
    role: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);