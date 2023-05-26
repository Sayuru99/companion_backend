const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
    },
    location:{
        type: String,
    }
});

module.exports = mongoose.model('Post', PostSchema);