const platforms = require("../models/Platforms")



module.exports = {


    createPlatform(req, res, next) {

        
        platforms.create(req.body).then((platform) => {
            res.status(201).json(
                {
                    success:true,
                    platform
                })            
        }).catch(err=>{
            res.status(400).json(
                {
                    success:true,
                    msg:err
                }) 
        })
    },

    updatePlatform(req, res, next){
        
        platforms.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).then(platform=>{
            console.log(platform)
            res.status(200).json(
                {
                    success:true,
                    platform
                })    
        })
    },


    deletePlatform(req, res, next){
        platforms.findByIdAndRemove({_id:req.params.id}).then((platform)=>{
            res.status(200).json(
                {
                    success:true,
                    platform
                })    
        })
    }

}