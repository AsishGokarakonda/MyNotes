const express = require("express");
const usersch = require("../models/User")
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

secretKey = "nodemon@JWT"
//create user with end point /api/auth/createuser. No login required
router.post("/createuser",
    //validations for name,email,password
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }), async (req, res) => {
        try {
            //if there are any errors in validations,then they will be displayed
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //checking whether user exists already or not.
            let user1 = await usersch.findOne({ email: req.body.email })
            if (user1) {
                return res.status(400).json({ error: "This email already exists" })
            }
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(req.body.password, salt);
            let data ={
                user:{
                    id:usersch.id
                }
            }
            var token = jwt.sign(data,secretKey);
            console.log(token)
            //if user doesn't exist, new user will be created.
            let user = await usersch.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            }).then(user => res.json(user))
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occured")
        }
    })




module.exports = router