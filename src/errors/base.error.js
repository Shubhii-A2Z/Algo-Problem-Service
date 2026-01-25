class BaseError extends Error{
    constructor(name,statusCode,description,details){
        super(description); // super constructor i.e. constructor of Error class
        this.name=name;
        this.statusCode=statusCode;
        this.details=details;
        // Error.captureStackTrace(this);
    }
}

module.exports=BaseError;