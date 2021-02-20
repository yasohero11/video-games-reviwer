const express = require("express")
const {getGames,deleteGame,updateGame,createGame,getGame} = require("../controllers/gamesController")
const router = express.Router()
const comments = require("./comments")

/*
router.use("/:gameId/comments" ,comments ) // if /api/v1/12263/comments will go to the comments route
router.use("/:gameId/comments/:commentId" ,comments)
*/
router.route("/")
    .get(getGames)
    .post(createGame)






router.route("/:id")
    .get(getGame)
    .put(updateGame)
    .delete(deleteGame)    





module.exports = router