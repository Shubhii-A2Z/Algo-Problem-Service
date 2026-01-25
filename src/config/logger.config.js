const winston=require('winston');

const allowedTransports=[];

// The below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YY-MM-DD HH:mm:ss'
        }),
        // first argument to the combine method is defining what exactly is going to be printed in log
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// The below transport configuration enables logging to store on a file
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}));

// default formatting
const logger=winston.createLogger({
    format: winston.format.combine(
        // first argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YY-MM-DD HH:mm:ss'
        }),
        // first argument to the combine method is defining what exactly is going to be printed in log
        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports=logger;