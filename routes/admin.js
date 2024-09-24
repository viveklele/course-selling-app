const {Router} = require('express')

const adminRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "you are sign up"
    })
})

userRouter.post('/signin', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

userRouter.post('/course', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

userRouter.put('/course', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

userRouter.get('/course/bulk', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

module.exports = {
    adminRouter : adminRouter
}