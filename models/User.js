const mongoose = require('mongoose');
const Scchema = mongoose.Schema;

const UserSchema = new Scchema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date
});

const User = mongoose.model('User', UserSchema);

module.exports = User;