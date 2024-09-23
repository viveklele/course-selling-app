const express = require('express');
const app = express();
const port = 3000;

app.post('/user/signup', (req, res) => {
    res.json({
        message: "you are sign up"
    })
})

app.post('/user/signin', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

app.get('/courses', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

app.get('/user/purchases', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

app.get('/course/purchase', (req, res) => {
    res.json({
        message: "you are sign in"
    })
})

app.listen(3000);
