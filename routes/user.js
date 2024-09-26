const { Router } = require('express');
const { userModel } = require('../db')
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require('../config');
const { userMiddleware } = require('../middleware/user');

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

userRouter.get('/purchases', userMiddleware, async (req, res) => {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    })
    res.json({
        purchases
    })
})

module.exports = {
    userRouter : userRouter
}