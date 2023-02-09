const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../model/student');
/* const checkAuth = require('../middleware/check_auth'); */

// ! For Get Request | retrive Data From DataBase //
router.get('/all-std',(req, res, next) => {
    /* res.status(200).json({
        message: 'this is student get request'
    }) */
    Student.find()
        .then(result => {
            res.status(200).json({
                studentData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})

// ! For Get Request | retrive One Data From DataBase //
router.get('/get-std/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                studentData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})

// ! For Post Request 👇👇 added Data from DataBase //
router.post('/add-std', (req, res, next) => {
    /* res.status(200).json({
        message: 'this is student post request'
    }) */
    /* console.log(req.body); */
    /* console.log(req.body.email); */

    /* res.status(200).json({
        message: 'this is student post request'
    }) */

    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        roll: req.body.roll,
        deptname: req.body.deptname,
        contact: req.body.contact,
        city: req.body.city
    })

    student.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                newStudent: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// ! For Delete Request | Delete Data From DataBase //
router.delete('/delete-std/:id', (req, res, next) => {
    Student.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: 'Data Deleted',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Data Not Deleted',
                error: err
            })
        })
})

// ! For PUT Request Update data from Database //
router.put('/update-std/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            roll: req.body.roll,
            deptname: req.body.deptname,
            contact: req.body.contact,
            city: req.body.city
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_record:result
        })
    })
    .catch(err=>{
        console.log(error)
        res.status(500).json({
           error:err
        })
    })
})

// ! PUT Request For Update All Data
// ! Patch Request For Update Indivisible Data



module.exports = router;