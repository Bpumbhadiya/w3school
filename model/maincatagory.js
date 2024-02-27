const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const maincatSchema = new Schema({
    title: String,
    colorcode: String,
    tagline: String

});

const MAINCAT = mongoose.model('catagory', maincatSchema);

module.exports = MAINCAT;