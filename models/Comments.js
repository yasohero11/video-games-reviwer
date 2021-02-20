
const mongoose = require('mongoose');
//Set up default mongoose connection

const commentsSchema  = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.ObjectId, 
        ref:"usersSchema",
        
        required : true
    }, 
  
   // repliesID:Number,
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

})
module.exports =  mongoose.model("commentsSchema" ,  commentsSchema)