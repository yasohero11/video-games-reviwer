const comments = require("../models/Comments")
const games = require("../models/Games")
const querySelector = require("../utilities/querySelector")
const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1159135",
    key: "933db5119370d8747a2c",
    secret: "da5a55f33de1885199ee",
    cluster: "eu",
    useTLS: true
  });

module.exports = {

    getComments: (req, res, next) => {
        const { queryStr, fields, sortby, limit, page, skip } = { ...querySelector(req.query) }

        let commentsID = req.params.commentId

        if (commentsID)
            queryStr["commentsID"] = commentsID


        comments.find(queryStr).select(fields).sort(sortby).skip(skip).limit(limit).then(comments => {
            res.status(200).json(
                {
                    success: true,
                    count: comments.length,
                    currrntPage: page,
                    limit,   // you can but only the key senice the key is the same as the value insted of limit : limit
                    data: comments
                })
        })
        //console.log(myObject.name); using the middleware directtly 
    },









    createComment: (req, res, next) => {
        console.log(req.user._id)
        req.body["userId"] = req.user._id
        console.log(req.body)
        comments.create(req.body).then((comment) => {
           
            
            games.findByIdAndUpdate(req.params.gameId, {   $push: { comments: comment._id } }).then(() => {
                pusher.trigger(`my-${req.params.gameId}`, `my-${req.params.gameId}`, {
                    data: comment
                  });
                  
              
                res.status(201).json(
                    {
                        success: true,
                        data: comment,
                    })
            })



        })
    },


    updateComment: (req, res, next) => {
        comments.findByIdAndUpdate(req.params.commentId, req.body, { new: true, runValidators: true }).then(comment => {
            res.status(201).json(
                {
                    success: true,
                    data: comment
                })
        })
    },

    deleteComment: (req, res, next) => {

        comments.findByIdAndDelete(req.params.commentId).then(comment => {
            
            
            games.findByIdAndUpdate(req.params.gameId , { $pull: { comments: comment._id } }).then(()=>{
                res.status(203).json(
                    {
                        success: true,
                        data: `comments with id : ${comment._id} is been deleted`
                    })
            })
            

        })

    }

}



