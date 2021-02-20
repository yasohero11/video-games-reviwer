const games = require("../models/Games")
const upload = require("../utilities/uploader")
const fs = require('fs');
const path = require('path');
function uploadImage(req, res, cb) {

    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            res.status(400).json(
                {
                    success: false,
                    msg: err
                }
            )

        } else {
        
            if (req.body.old_image) {
              
                let file = req.file

                if (file) {
                    req.body["image_path"] = `/assets/uploads/${file.filename}`                  
                    fs.unlink(path.join(__dirname,`../${req.body.old_image}`), (err)=>{
                        console.log(err)
                    })
                }
            }
            cb(req, res)
        }
    })
}

module.exports = {

    getGames: (req, res, next) => {


        // /api/v1/games/search?price[$lte] =50   select all games that have a price less tah or equal to 50
        // /api/v1/games/search?platforms:["Windows","Ps", "Xbox"]   select all games that have platforms array Windows and Ps and Xbox
        // /api/v1/games?platforms=Windows&platforms=Ps&platforms=cc&platforms=cc

        //getCurrentDate()

        let queryStr = ""



        //const {queryStr, fields, sortby, limit,page,skip} =  {...querySelector(req.query)}


        games.find().populate("tags").populate("platforms").slice('platforms', 5).slice('tags', 5).sort("createdAt").then(games => {

            console.log(games)
            res.render("games", { games , user:req.user })
            /*
            res.status(200).json(
                {
                    success: true,
                    count: games.length,
                    games
                })
                */
        })

        /*
        if(req.query.select){
            let fields  = req.query.select.split(",").join(" "); 
            
            query = query.select(fields);
            console.log(query)
          }             
        
         
      
        */
        //console.log(myObject.name); using the middleware directtly 
    },





    getGame: (req, res, next) => {

        games.findById(req.params.id).populate('comments').populate("tags").populate("platforms").then(game => {
            console.log(game)
            res.render("products", { game, user:req.user })
        }).catch(err => next(err))
    },

    createGame: (req, res) => {

        uploadImage(req, res, function () {

            let body = req.body
           
            if(body.tags)
                body.tags = body.tags.split(",")

            if(body.platforms)
                body.platforms = body.platforms.split(",")

            if(body.types)
                body.types = body.types.split(",")
            
            console.log(body) 
            games.create(body).then((game) => {
                res.status(201).json(
                    {
                        success: true,
                        data: game
                    })
            }).catch(err => {
                console.log(err)
                res.status(201).json(
                    {
                        success: false,
                        msg: err.code ==  "11000"? "11000": err.errors
                    })
            })

        })

    },


    updateGame: (req, res, next) => {
        uploadImage(req, res, function () {
            let body = req.body
            if(body.tags)
                body.tags = body.tags.split(",")

            if(body.platforms)
                body.platforms = body.platforms.split(",")

            if(body.types)
                body.types = body.types.split(",")

            games.findByIdAndUpdate(req.params.id, body, { new: true, runValidators: true }).then(game => {
                res.status(201).json(
                    {
                        success: true,
                        data: game
                    })
            }).catch(err => {
                console.log(err)
                res.status(201).json(
                    {
                        success: false,
                        msg: err.code ==  "11000"? "11000": err.errors
                    })
            })

        })


    },

    deleteGame: (req, res, next) => {

        games.findByIdAndDelete(req.params.id).then(game => {

            res.status(203).json(
                {
                    success: true,
                    data: `game with id : <strong>${game._id}</strong> and named : <strong> ${game.name} </strong> is been deleted`
                })

        }).catch(err => res.status(400).json({
            success: false,
            msg: "Thier is somethig whent wrong, please try again"
        }))

    }

}



