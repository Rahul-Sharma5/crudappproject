const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// ! Connected Routes File //
const employeeRoute = require('./api/routes/employee');
const studentRoute = require('./api/routes/student');
const userRouter = require('./api/routes/user');
// ! Connected Routes File End //

// ! Connected with Mongodb //
mongoose.connect('mongodb+srv://Rahul:Rahul05@cluster0.3dsw4rq.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error', err =>{
    console.log('Mongodb Connection Failed');
});

mongoose.connection.on('connected', connected =>{
    console.log('Mongodb Connection successful..');
});
// ! Connected with Mongodb End //

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


// ! Router Part Start //
app.use('/student',studentRoute)
app.use('/employee',employeeRoute)
app.use('/user',userRouter)
/* app.use('./employee, employeeRoute') */
/* app.use('/faculty',facultyRoute) */
// ! Router Part End //


// ! Error Handling for Bad Url //
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Page not found'
    })
})
// ! Error Handling for Bad Url end //

/* app.use((req,res,next)=>{
    res.status(200).json({
        message: 'Hello Node Server'
    })
}) */

module.exports = app;