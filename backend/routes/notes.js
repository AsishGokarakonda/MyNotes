const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("hi notes")
})

module.exports = router