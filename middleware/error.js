const Errorhandler= require('../utils/errorHandler')

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    err = new Errorhandler("try again",400)
    res.status(err.statusCode).send({
        success:false,
        error:err
    })
}