const { Schema, model } = require('mongoose');
const { userRoles } = require('../configs');

const userSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: userRoles.USER,
        enum: Object.values(userRoles)
    }
}, { timestamps: true });

module.exports = model('user', userSchema);
