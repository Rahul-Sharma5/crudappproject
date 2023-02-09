const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// ! Connection User Model file
const User = require('../model/user');

/* router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'user router working'
    })
}) */

// ! Signup Router //
router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err)
        {
          return res.status(500).json({
            error:err
          }) 
        }
        else
        {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                name:req.body.name,
                email:req.body.email,
                password:hash,
                phone:req.body.phone,
                userType:req.body.userType
            })
            user.save()
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
        }
    })
})

// ! Loginin Router //
router.post('/signin', (req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length < 1)
        {
            return res.status(401).json({
                msg: 'user not found'
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result)
            {
                return res.status(401).json({
                    msg: 'Password wrong'
                })
            }
            if(result)
            {
                const token = jwt.sign({
                    name:user[0].name,
                    userType:user[0].userType,
                    email:user[0].email,
                    phone:user[0].phone
                },
                'this is dummy text',
                {
                    expiresIn:"24h"
                }
                );
                res.status(200).json({
                    name:user[0].name,
                    userType:user[0].userType,
                    email:user[0].email,
                    phone:user[0].phone,
                    token:token
                })
            }
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })

})


module.exports = router;