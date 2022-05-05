const express = require("express");
const usersch = require("../models/User")
const router = express.Router();

router.get("/",async (req,res)=>{
    res.send("connected to auth.js")
    const user=usersch(req.body)
    await user.save()
    console.log(req.body)
})

module.exports = router