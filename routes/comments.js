const app = require("express") 
const router = app.Router({mergeParams : true}) // app.Router({mergeParams : true}) to bind the route from the games route to this route
const {getComments,createComment,updateComment,deleteComment} = require("../controllers/commentsController")




router.route("/")
        .get(getComments)
        .put(updateComment)
        .delete(deleteComment)

router.route("/:gameId")
        .post(createComment)


module.exports = router

