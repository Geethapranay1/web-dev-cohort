const express = require("express");
const { Account } = require("../db");
const { authMiddleware } = require('../middleware');
const mongoose = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {

    const userId = req.userId;
    const account = await Account.findOne({ userId });
    res.json({
        balance: account.balance,
    })
})

// router.post("/transfer", authMiddleware, async (req, res) => { //bad solution
//     const { userId } = req.userId;
//     const { amount, to } = req.body;
//     const account = await Account.findOne({ userId });
//     const toAccount = await Account.findOne({ userId: to });
//     if (!toAccount) {
//         return res.status(400).send("Account not found");
//     }
//     if (account.balance < amount) {
//         return res.status(400).send("Insufficient balance");
//     }
//     account.balance -= amount;
//     toAccount.balance += amount;
//     await account.save();
//     await toAccount.save();
//     res.json({
//         message: "Transfer successful",
//     })
// })

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).send("Account not found or insufficient balance");
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        
        return res.status(400).send("Account not found");
    }
    console.log(-amount, amount, amount);
    await Account.updateOne({
        userId: req.userId,
    }, {
        $inc : {
            balance: -amount,
        }
    }).session(session);
    await Account.updateOne({
        userId: to,
    }, {
        $inc: {
            balance: amount,
        }
    }).session(session);

    await session.commitTransaction();
    session.endSession();
    res.json({
        message: "Transfer successful",
    
    })

})





module.exports = router;