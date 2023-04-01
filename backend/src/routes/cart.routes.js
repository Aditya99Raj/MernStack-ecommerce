const express = require('express');
const cartSchema = require('../models/cart.model');

const router = express.Router();

router.post('/:userId',async(req,res)=>{
    const user = await cartSchema.create(req.body);
    return res.status(201).send({user});
})

router.get('/:userId',async(req,res)=>{
    const users = await cartSchema.find().lean().exec();
    return res.status(200).send({users});
})

module.exports = router;