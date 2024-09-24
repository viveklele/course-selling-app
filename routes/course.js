const { Router } = require('express');

const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.json({
        message: "you are sign in"
    })
});

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "you are sign in"
    })
});

module.exports = {
    courseRouter: courseRouter
}