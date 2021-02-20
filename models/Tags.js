const mongoose = require('mongoose');
const tagsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        }
    })


module.exports = mongoose.model("tagsSchema" ,  tagsSchema)