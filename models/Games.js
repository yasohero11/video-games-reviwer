const mongoose = require('mongoose');
const slugfiy =  require('slugify')

urlRegex =[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ ,
    "This URL is not valid please try again"]

//availablePlatforms =["Windows" ,"Mac", "Ps", "Xbox", "Nintendo"]



/*
{
 "name": "Call of Duty 3",
 "price": 120,
 "publisher": "Game Master",
 "developer": "Ubisoft",
 "image":"../assets/img/call",
 "description":"call of duty description",
 "downloadLink":"https://store.steampowered.com/agecheck/app/311210/",
 "types":["first person shooting" , "multiplyer"],
 "tags":["fight","rifles","wepones"],
 "platforms":["Windows","Ps","Xbox"],
 "rating":"Mature +17"
}
*/

const gamesSchema = new mongoose.Schema(
    {
       
        name:{
            type:String, 
            required :[ true , "Please enter the name"],
            unique : [true, "there is a game with same name"],
            trim : true,
            maxlength: [50 , "you can't enter more than 50 words"]
        },

        comments :[{type : mongoose.Schema.ObjectId, ref:"commentsSchema"}],                    
        price:{
            type:Number,
            required:[true,"Price is required"]
        },        
        publisher:{
            type:String,
            required :[ true , "Please enter the name of the publisher"],
            //unique : true
            trim : true,
            maxlength: [20 , "you can't enter more than 20 words"]
        },
        developer:{
            type:String,
            //required :[ true , "Please enter the name of the developer"],
            //unique : true
            trim : true,
            maxlength: [20 , "you can't enter more than 50 words"]
        },
        slug:String,
        image_path:{
            type: String,
            default:'/assets/img/no-image.jpg'
        },
        description:{
            type:String,
            required :[ true , "Pelsase enter the description"],
          
        },
        downloadLink:{
            type:String,
            match:urlRegex
        },
        types:[{type : mongoose.Schema.ObjectId, ref:"typesSchema"}],
        tags:[{type : mongoose.Schema.ObjectId, ref:"tagsSchema"}],        
        platforms:[{type : mongoose.Schema.ObjectId, ref:"platformSchema"}],
        releaseDate:{
            type:Date,
            default:Date()
        },
        rateing:{
            type:String,
            required:[true,"game rateing is requrired"],
            maxlength:[20, "rateing max words is 20 words"]
        },
        createdAt:{
            type:Date,
            default:Date()
        },
        facebookPage:{
            type:String,
            match:urlRegex
        },
        twitterPage:{
            type:String,
            match:urlRegex
        },
        instagramPage:{
            type:String,
            match:urlRegex
        },
        twitchPage:{
            type:String,
            match:urlRegex
        },
        youtubePage:{
            type:String,
            match:urlRegex
        },
        website:{
            type:String,
            match:urlRegex
        },       
    }
)


gamesSchema.pre("save" , function(next){
    this.slug = slugfiy(this.name , {lower:true})
    next()
})
module.exports =  mongoose.model("GamesSchema" ,  gamesSchema)
