const { Router } = require('express');
const { userModel } = require('../db')
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "adsl";

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB
    // TODO: Put inside a try catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})

userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({
        email : email,
        password : password
    });

    if(user) {
        const token = jwt.sign({
            id : user._id
        }, JWT_USER_PASSWORD)

        res.json({
            token : token
        })
    } else {
    res.status(403).json({
        message: "incorrect crediantials"
        })
    }   
})

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

module.exports = {
    userRouter : userRouter
}