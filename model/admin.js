const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const adminschema = new Schema({
    name: String,
    email: String,
    password: String
});

const NEWUSERS = mongoose.model('user', adminschema);

module.exports = NEWUSERS;