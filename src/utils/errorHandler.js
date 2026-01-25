const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");
// const logger = require("../config/logger.config");

function errorHandler(err,req,resp,next){
    // console.log(err); // just debugging what kind of error is this
    if(err instanceof BaseError){
        return resp.status(err.statusCode).json({
            success: false,
            message: err.message,
            details: err.details,
            data: {}
        });
    }

    // logger.error(`Something went wrong!`);
    return resp.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong',
        details: err,
        data: {}
    });
}

module.exports=errorHandler;