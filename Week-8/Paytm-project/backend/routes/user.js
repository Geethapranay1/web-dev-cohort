const express = require('express');
const { User, Account } = require('../db');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');

const router = express.Router();
const signUpSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50),
});

const signInSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
});

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().max(50).optional(),
    lastName: zod.string().max(50).optional(),
});



router.post("/signup", async (req, res) => {
    const { username, password, firstName, lastName } = req.body;
    const { success } = signUpSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).send("Incorrect data format");
    }
    const checkUser = await User.findOne({ username });
    if (checkUser) {
        return res.status(400).send("user already exists");
    
        }

    const dbUser = new User({
        username,
        password,
        firstName,
        lastName,
    });
    await dbUser.save(); 
    const userId = dbUser._id;  

    await Account.create({
        userId: userId,
        balance: Math.floor(Math.random() * 10001),
    })
    const token = jwt.sign({ userId }, JWT_SECRET);


    res.json({
        message: "User created successfully",
        token: token,
    })
    
})

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const { success } = signInSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).send("Incorrect data format");
        
    }
    const user = await User.findOne({
        username,
        password,
    })
    if (!user) {
        return res.status(400).send("Invalid username or password");
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({
        message: "User logged in successfully",
        token: token,
    })
})

router.put("/update", authMiddleware, async (req, res) => {
    const { password, firstName, lastName } = req.body;
    const { success } = updateSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            msg: "Incorrect data format"
        })
    }
    
    const user = await User.updateOne({
        _id: req.userId,
    }, {
        $set: {
            password: password,
            firstName: firstName,
            lastName: lastName,
        }
    
    })
    res.json({
        message: "User updated successfully",
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter;

    const users = await User.find({
        $or: [{
            firstName: {
                $regex: filter,
            }}, {
            lastName: {
                $regex: filter,
            }}
    ]
    })

    res.json({
        users: users.map((user) => {
            return {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id,
            }
        })
    })
    

})

//1:38:00
    



module.exports = router;   