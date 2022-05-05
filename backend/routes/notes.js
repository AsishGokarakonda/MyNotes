const express = require("express")
const fetchuser = require("../middleware/fetchuser")
const router = express.Router()
const notesch = require("../models/Notes")
const { body, validationResult } = require('express-validator');


//gets notes with the auth token provided in header
router.get("/getnotes",fetchuser,async(req,res)=>{
    try{
        const notes = await notesch.find({userId:req.user.id})
        res.status(200).send(notes)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occured")
    }
})



//add notes to a particular persons notes with auth token provided in header
router.post("/addnotes",fetchuser,body('title').isLength({ min: 3 }),async(req,res)=>{
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {title,description,tag} = req.body
    let notes = await notesch.create({
        userId:req.user.id,
        title:title,
        description:description,
        tag:tag
    })
    res.status(200).send(notes)

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occured")
    }
})




module.exports = router