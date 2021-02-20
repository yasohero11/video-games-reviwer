const express = require("express")
const router =  express.Router()
const tags = require("../models/Tags")
const types = require("../models/Types")
const plateforms = require("../models/Platforms")
const games = require("../models/Games")


function getDocuments(collection, res, cb){
    collection.find().then((documents)=>{        
        cb(documents)
    }).catch(err=>{
        console.log(err)
        res.send(400).json({
            success:false,
            msg:err
        })
    })
}


router.get("/" , (req, res)=>{
    games.find().populate("tags").populate("platforms").limit(20).then(games=>{
        console.log(games)
        res.render("admin" , {games})
    })
})
router.get("/games",(req,res)=>{
    getDocuments(tags, res, function(tagDocuments){
        getDocuments(types, res, function(typeDocuments){
            getDocuments(plateforms, res, function(platformDocuments){
                let obj = {                    
                    tagDocuments,
                    typeDocuments,
                    platformDocuments
                }             
                res.render("games_panel" , {data: obj , game:""})                
            })
        })
    })    
    
})



router.get("/games/:gameId",(req,res)=>{
    getDocuments(tags, res, function(tagDocuments){
        getDocuments(types, res, function(typeDocuments){
            getDocuments(plateforms, res, function(platformDocuments){
                let obj = {                    
                    tagDocuments,
                    typeDocuments,
                    platformDocuments
                }   
                games.findById(req.params.gameId).then(game=>{
                    console.log(game)                    
                    res.render("games_panel" , {data: obj, game})             
                })
            })
        })
    })    
    
})

module.exports =  router