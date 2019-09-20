'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
    number: String,
    name: String,
    duration: String,
    file: String,
    album: { type: Schema.ObjectId, ref: 'Album'}
});

//el objeto User va ser el que lleve la lista de todos los usuarios del UserSchema
module.exports = mongoose.model('Song', SongSchema);