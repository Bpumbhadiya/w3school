const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subcatSchema = new Schema({
    name: String,
    maincatagory: { type: Schema.Types.ObjectId, ref: 'catagory' }
});

const SUBCATAGORY = mongoose.model('subcatagory', subcatSchema);

module.exports = SUBCATAGORY;
