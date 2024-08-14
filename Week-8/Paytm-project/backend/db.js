
const mongoose = require("mongoose");
const { object } = require("zod");


mongoose.connect("mongodb+srv://geethapranayofficial:A7lox4fBUVaEpFxW@cluster0.2ns0wr6.mongodb.net/Paytm")

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,   
    },
    // address: object({
    //     flatNo: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         maxLength: 50,
    //     },
    //     street: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         maxLength: 50,
    //     },
    //     city: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         maxLength: 50,
    //     },
    //     state: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         maxLength: 50,
    //     },
    //     pincode: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         maxLength: 50,
    //     },
    
    // }),
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,

    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    }
);

const accountSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
});

const User = mongoose.model("user", user);
const Account = mongoose.model("account", accountSchema);

module.exports = {
    User,
    Account,
};