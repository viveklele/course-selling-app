const {Router} = require('express');
const { adminModel } = require('../db');
const adminRouter = Router();
const JWT_ADMIN_PASSWORD = "imadmin"
const jwt = require("jsonwebtoken");

adminRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB
    // TODO: Put inside a try catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})

adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({
        email : email,
        password : password
    });

    if(admin) {
        const token = jwt.sign({
            id : admin._id
        }, JWT_ADMIN_PASSWORD)

        res.json({
            token : token
        })
    } else {
    res.status(403).json({
        message: "incorrect crediantials"
        })
    }   
})

adminRouter.post('/course', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

adminRouter.put('/course', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

adminRouter.get('/course/bulk', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

module.exports = {
    adminRouter : adminRouter
}