const mongoose = require('mongoose');

const employeeScheme = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    deptname:String,
    contact:Number,
    city:String,
    salary:Number
})

module.exports = mongoose.model('Employee', employeeScheme);