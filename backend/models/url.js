const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Group = require("./group");
require('mongoose-type-url');

const UrlSchema = new Schema({
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
    parent:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group',
        required: [true, "Group Id is required"]
    }
    
});

const Url = mongoose.model('url',UrlSchema);

module.exports = Url;