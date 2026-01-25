const express=require('express');
const bodyParser=require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const { StatusCodes } = require('http-status-codes');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

// if any request comes and starts with /api, we map it to apiRouter
app.use('/api',apiRouter);

app.get('/ping',(req,resp)=>{
    return resp.status(StatusCodes.OK).json({mssg:'Problem Service is alive'});
});

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server started at port ${PORT}`);
    await connectToDB();
    console.log('Connected to Db');
});