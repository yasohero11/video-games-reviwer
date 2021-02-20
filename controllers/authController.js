const user = require("../models/user")
const passport = require("passport")

module.exports = {

    logout(req,res,next){
        
        req.logout();
        res.redirect("/auth")
    },
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated())         
            return next();
        
        //req.flash('error_msg', 'Please log in to view that resource');
        res.render("signup",{user:req.user});
    },
    login(req, res, next) {
        console.log(req.body)
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/auth',
            failureFlash: false
        })(req, res, next);
    }
    ,
    getAuth(req, res, next) {
        if(req.isAuthenticated())                      
            res.redirect("/")            
        
        console.log("enn asd")

        res.render("signup", { user : req.user})
    },

    createUser(req, res, next) {

        console.log(req.body)
        user.create(req.body).then((user) => {
            res.status(201).json(
                {
                    success: true,
                    user
                })
        }).catch(err => {
            res.status(400).json(
                {
                    success: true,
                    msg: err
                })
        })
    },

    updateUser(req, res, next) {
        types.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(type => {
            res.status(200).json(
                {
                    success: true,
                    type
                })
        })
    },


    deleteUser(req, res, next) {
        types.findByIdAndRemove({ _id: req.params.id }).then((type) => {
            res.status(200).json(
                {
                    success: true,
                    type
                })
        })
    }

}