const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userType: {
        type: String,
        enum: ['employer', 'candidate']
    }
});

module.exports = mongoose.model('User', UserSchema);
