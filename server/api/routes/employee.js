const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../model/employee')

/* router.get('/', (req,res,next)=>{
    res.status(200).json({
        msg: 'This is Employee get request'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg: 'This is Employee post request'
    })
}) */
// ! For Get Request | retrive Data From DataBase //
router.get('/all-emps',(req, res, next) => {
    /* res.status(200).json({
        message: 'this is Employee get request'
    }) */
    Employee.find()
        .then(result => {
            res.status(200).json({
                employeeData: result
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
router.post('/add-emp', (req, res, next) => {
    /* res.status(200).json({
        message: 'this is Employee post request'
    }) */
    /* console.log(req.body); */
    /* console.log(req.body.email); */

    /* res.status(200).json({
        message: 'this is Employee post request'
    }) */

    const employee = new Employee({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        deptname: req.body.deptname,
        contact: req.body.contact,
        city: req.body.city,
        salary: req.body.salary
    })

    employee.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                newEmployee: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// ! For Get Request | retrive One Data From DataBase //
router.get('/get-emp/:id', (req, res, next) => {
    console.log(req.params.id);
    Employee.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                employeeData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})

// ! For Delete Request | Delete Data From DataBase //
router.delete('/delete-emp/:id', (req, res, next) => {
    Employee.remove({ _id: req.params.id })
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

// ! PUT Request For Update All Data | Update Data From DataBase //
router.put('/update-emp/:id', (req, res, next) => {
    console.log(req.params.id);
    Employee.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            deptname: req.body.deptname,
            contact: req.body.contact,
            city: req.body.city,
            salary: req.body.salary
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


module.exports = router;