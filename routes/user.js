const { Router } = require('express');

const userRouter = Router();

userRouter.get('/signup', (req, res) => {
    res.json({
        message: "you are sign up"
    })
})

userRouter.get('/signin', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

module.exports = {
    userRouter : userRouter
}