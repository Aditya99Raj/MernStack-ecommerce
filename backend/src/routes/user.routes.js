const express = require('express');
const userSchema = require('../models/user.model');

const router = express.Router();

router.post('/',async(req,res)=>{
    const user = await userSchema.create(req.body);
    return res.status(201).send({user});
})

router.get('/',async(req,res)=>{
    const users = await userSchema.find().lean().exec();
    return res.status(200).send({users});
})

module.exports = router;
