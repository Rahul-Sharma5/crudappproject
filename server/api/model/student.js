const mongoose = require('mongoose');

const studentScheme = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    roll:Number,
    deptname:String,
    contact:Number,
    city:String
})

module.exports = mongoose.model('Student', studentScheme);