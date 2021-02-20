const mongoose = require('mongoose');
const platformSchema = new mongoose.Schema(
    {

        name:{
            type: String,
            required:true
        },
        icon:{
            type:String
        }

    })


module.exports = mongoose.model("platformSchema" , platformSchema)