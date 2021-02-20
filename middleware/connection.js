const mongoose = require('mongoose')


const connectDb = async()=>{
    const conn =  await mongoose.connect("mongodb://localhost/myDb",{
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology:true
    }).catch(err=>{
        console.log("emm")
        console.log(err)
    })

    console.log(`MongoDb connected on Host: ${conn.connection.host} and Port: ${conn.connection.port} `)
}

module.exports = connectDb