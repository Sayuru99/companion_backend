const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    adminUserName: {
        type: String,
        required: true,
        unique: true
    },
    adminPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Admin', AdminSchema);
