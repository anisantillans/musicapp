'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});
//el objeto User va ser el que lleve la lista de todos los usuarios del UserSchema
module.exports = mongoose.model('User', UserSchema);