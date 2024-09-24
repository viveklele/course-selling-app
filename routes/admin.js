const {Router} = require('express')

const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {
    res.json({
        message: "you are sign up"
    })
})

adminRouter.post('/signin', (req, res) => {
    res.json({
        message: "you are sign in"
    })
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