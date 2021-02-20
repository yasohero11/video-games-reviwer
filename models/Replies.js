const mongoose = require("mongoose")


const repliesShema =  new mongoose.Schema(
    {
        userID:{
            type:Number,
            required = true
        },
        
        text:{
            type:String,
            required:true
        },
        likes:Number,
        dislikes:Number,
        date:{
            type:Date,
            default:Date()
        }
    }
)

module.exports =  mongoose.model("repliesShema" ,  repliesShema)