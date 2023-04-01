const express = require("express");
const wishlistModel = require("../models/wishlist.model");
const router = express.Router();

router.post("/wishlist",async(req,res)=>{
    const {userId,category} = req.body;
    try{

        const wishlistItems = await wishlistModel.create(userId,category)
        return res.status(201).send({wishlistItems,response:'Success'})
    }catch(err){
        console.log(err)
    }

})

router.get("/:userId",async(req,res)=>{
    const {userId} = req.body;
    try{
        const wishlistItems = await wishlistModel.find(userId);
        return res.status(201).send({wishlistItems})
    }catch(err){
        return res.status(500).send({err})
    }
})



module.exports = router;