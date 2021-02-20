const tags = require("../models/Tags")


module.exports = {


    createTag(req, res, next) {

        
        tags.create(req.body).then((tag) => {
            res.status(201).json(
                {
                    success:true,
                    tag
                })            
        }).catch(err=>{
            res.status(400).json(
                {
                    success:true,
                    msg:err
                }) 
        })
    },

    updateTag(req, res, next){
        
        tags.findOneAndUpdate({_id:req.params.id}, req.body ,{ new: true}).then(tag=>{
            
            res.status(200).json(
                {
                    success:true,
                    tag
                })     
        }).catch(err=>{
            console.log(err)
            res.status(400).json(
                {
                    success:false,
                    msg: err
                }) 
        })
    },


    deleteTag(req, res, next){
        
        tags.findByIdAndRemove({_id:req.params.id}).then(tag=>{
            res.status(200).json(
                {
                    success:true,
                    tag
                })    
        }).catch(err=>{
            console.log(err)
            res.status(400).json(
                {
                    success:false,
                    msg: err
                }) 
        })

    }

}