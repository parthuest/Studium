const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-url');

const GroupSchema = new Schema({
    name: {
        type: String,
    },
    url: {
        type: mongoose.SchemaTypes.Url,
        required: [true, "URL is required"]
    },
    visitCounter: {
        type: Number,
        default: 0,
    },
    childUrls: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Url',
        // required: [true, "URL Id is required"]
    }],
});

const Group = mongoose.model('group',GroupSchema);

module.exports = Group;