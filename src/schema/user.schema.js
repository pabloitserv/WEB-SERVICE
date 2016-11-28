let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    cpf: {
        type: Number,
        required: true,
        unique: true
    },

    password: {
        type: String,
        default: null
    },

    role: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    }

});


module.exports = {
    user: mongoose.model('User', userSchema)
}