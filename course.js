const {Router} = require('express');
const userRouter = Router();

userRouter.post('/user/signin', (req, res) => {
    res.json({
        message: "you are sign in"
    })
});

userRouter.get('/course/purchase', (req, res) => {
    res.json({
        message: "you are sign in"
    })
});

module.exports = {
    userRuter : userRouter
}