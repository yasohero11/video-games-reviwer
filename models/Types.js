const mongoose = require('mongoose');
const typesSchema = new mongoose.Schema(
    {

        name:{
            type: String,
            required:true
        }

    })


    module.exports = mongoose.model("TypesSchema" ,  typesSchema)
