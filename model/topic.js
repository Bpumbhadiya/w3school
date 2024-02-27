const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
    name: String,
    description: String,
    subcatagory: { type: Schema.Types.ObjectId, ref: 'subcatagory' },
    maincatagory: { type: Schema.Types.ObjectId, ref: 'catagory' }
});

const TOPIC = mongoose.model('topic', topicSchema);

module.exports = TOPIC;