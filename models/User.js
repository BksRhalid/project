const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    familyName: String
});

mongoose.model('users', userSchema);

