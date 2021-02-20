
const mongoose = require('mongoose');
//Set up default mongoose connection

const usersSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    }


})
module.exports = mongoose.model("usersSchema", usersSchema)