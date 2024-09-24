const {Router} = require('express');

const userRouter = Router();

    userRouter.post('/user/signup', (req, res) => {
        res.json({
            message: "you are sign up"
        })
    })

    userRouter.post('/user/signin', (req, res) => {
        res.json({
            message: "you are sign in"
        })
    })

    userRouter.get('/user/purchases', (req, res) => {
        res.json({
            message: "you are sign in"
        })
    })

module.exports = {
    userRouter : userRouter
}