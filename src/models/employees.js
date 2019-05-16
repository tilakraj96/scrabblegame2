const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    username: { type: String },
    password: { type: String },
    email: { type: String},
    dateofbirth: { type: String },
    passcode:{type:Number},
    score:{type:Number},
    status:{type:Number}
});

module.exports = { Employee };