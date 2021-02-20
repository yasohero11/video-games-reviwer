const errorHandeler = (err , req ,res ,next)=>{
    error = {...err}
    
    
    if(error.name == 'CastError'){
        error.message = `Game is not found with ID ${err.value}`
        error.status = 404;
    }
    else if(error.name == 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error.message = message;
        error.status = 400;
    }
    res.status(error.status || 500).json({
        success:false,
        errors: error.message
    })
}



module.exports = errorHandeler;