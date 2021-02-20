const express =  require("express")
const passport = require("passport")
const router =  express.Router()
const {createUser, updateUser, deleteUser,getAuth, login, ensureAuthenticated, logout} =  require("../controllers/authController")



router.route("/")
        .get(ensureAuthenticated, getAuth)
        .post(createUser)
        
router.route("/login")
        .post( passport.authenticate('local', {            
                failureRedirect: '/auth',            
            }),login)

router.route("/logout")
            .get(logout)





router.route("/:id")        
        .delete(deleteUser)
        .put(updateUser)


module.exports = router