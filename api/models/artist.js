'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
    name: String,
    description: String,
    image: String
});
//el objeto User va ser el que lleve la lista de todos los artistas del ArtistSchema
module.exports = mongoose.model('Artist', ArtistSchema);