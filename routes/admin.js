const { Router } = require('express');
const { adminModel, courseModel } = require('../db');
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminMiddleware } = require('../middleware/admin');

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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price,
        createrId : adminId
    })
    res.json({
        message : "Course createrId",
        courseId : course._id
    })
})

adminRouter.put("/course", adminMiddleware, async(req, res) => {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId} = req.body;

    const course = await courseModel.updateOne({
        _id : courseId,
        createrId : adminId
    }, 
    {
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price,
        
    })
    res.json({
        message : "Course Updated",
        courseId : course._id
    })
});

adminRouter.get("/course/bulk", adminMiddleware, async(req, res) => {
    const adminId = req.userId
    const course = await courseModel.find({
        createrId : adminId
    })
    res.json({
        message : "Course Updated",
        course
    })
})

module.exports = {
    adminRouter : adminRouter
}