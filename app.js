const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
//const firebase = require("../models/connect")
const index = require('./routes/index');
const about = require('./routes/about');
const contactus = require('./routes/ContactUs');
const Features = require('./routes/Features');
const games = require("./routes/games")
const admin = require("./routes/admin")
const tags = require("./routes/tags")
const types = require("./routes/types")
const platform = require("./routes/platform")
const products = require('./routes/products');
const error404 = require('./routes/404error');
const comments = require('./routes/comments');
const auth = require('./routes/auth');
const connectDb = require("./middleware/connection")
const session = require('express-session');



app.use(express.static(path.join(__dirname, '/assets')))
app.use(express.static(path.join(__dirname)))
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }));
const passport = require('passport');
require('./config/passport')(passport);

app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 24 * 60 * 60 * 1000
      }
      
    })
  );

app.use(passport.initialize());
app.use(passport.session());
/*
app.use(index);
app.use(about);
app.use(products);
app.use(signup);
app.use(Features);
app.use(contactus);
app.use(error404);
*/







function getGames(str) {
    let games = []
    for (var i = 0; i < gamesLsit.length; i++) {
        if (str == (gamesLsit[i].type).toLowerCase() || str == (gamesLsit[i].name).toLowerCase())
            games.push(gamesLsit[i])
    }
    return games;
}
/*

//app.use(games);





app.get("/games/:type", (req, res, next) => {
    let type = req.params.type;

    res.render('games', { games: getGames(type) })
})



app.get("/game/:id", (req, res, next) => {
    let id = req.params.id
    let product;
    for (var i = 0; i < gamesLsit.length; i++) {
        if (gamesLsit[i].id == id) {
            product = gamesLsit[i]
            break;
        }
    }
    res.render("products", { product: product })
})

app.post("/addAccount", urlEncode, (req, res, next) => {
    response = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    console.log(response)
})
app.get("/search", (req, res, next) => {

    let type = req.query['search']

    res.redirect("/games/" + (type.toLowerCase()))

})
*/


connectDb()

app.use(express.json())



app.use("/", index)
app.use("/games", games)
app.use("/admin", admin)
app.use("/tags", tags)
app.use("/types", types)
app.use("/platforms", platform)
app.use("/auth", auth)
app.use("/comment", comments)









/* app.get('/Features', (req, res, next) => {
    res.render('Features')
})
app.get('/ContactUs', (req, res, next) => {
    res.render('ContactUs')
})
app.get('/about', (req, res, next) => {
    res.render('about')
})
app.get('/games', (req, res, next) => {
    console.log("ennn")
    res.render('games', {games:gamesLsit})
})

app.get("/games/:type" , (req, res, next)=> {
    let type  = req.params.type;
   
    res.render('games', {games:getGames(type)})
})

app.get("/game/:id" , (req,res,next)=>{
    let id = req.params.id
    let product ;
    for(var i =0; i <gamesLsit.length;i++){
        if(gamesLsit[i].id == id){
            product = gamesLsit[i]
            break;
        }
    }
    res.render("products" ,{product:product})
})

app.get("/search", (req, res, next) => {

    let type = req.query['search']

    res.redirect("/games/" + (type.toLowerCase()))
})
 */

app.listen(3000, (err) => {
    console.log(err)
    console.log('server listen on port 3000')

})