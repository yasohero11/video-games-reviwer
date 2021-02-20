const types = require("../models/Types")


module.exports = {


    createType(req, res, next) {

        
        types.create(req.body).then((type) => {
            res.status(201).json(
                {
                    success:true,
                    type
                })            
        }).catch(err=>{
            res.status(400).json(
                {
                    success:true,
                    msg:err
                }) 
        })
    },

    updateType(req, res, next){
        types.findOneAndUpdate({_id:req.params.id}, req.body ,{ new: true}).then(type=>{
            res.status(200).json(
                {
                    success:true,
                    type
                })    
        })
    },


    deleteType(req, res, next){
        types.findByIdAndRemove({_id:req.params.id}).then((type)=>{
            res.status(200).json(
                {
                    success:true,
                    type
                })    
        })
    }

}