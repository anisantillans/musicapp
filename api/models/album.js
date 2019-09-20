'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: { type: Schema.ObjectId, ref: 'Artist'}
});
//el objeto User va ser el que lleve la lista de todos los usuarios del UserSchema
module.exports = mongoose.model('Album', AlbumSchema);