const {StatusCodes}=require('http-status-codes');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const NotImplemented = require('../errors/notImplemented.error');

const problemService=new ProblemService(new ProblemRepository());

function pingController(req,resp){
    return resp.json({mssg:'Problem Controller is up'});
}

async function addProblem(req,resp,next){
    try {
        const newproblem=await problemService.createProblem(req.body);
        return resp.status(StatusCodes.CREATED).json({
            success: true,
            mssg: 'Successfully created a new problem',
            error: {},
            data: newproblem
        });
    } catch (error) {
        next(error);
    }
}

async function getProblem(req,resp,next){
    try {
        const problem=await problemService.getProblem(req.params.id);
        return resp.status(StatusCodes.OK).json({
            success: true,
            mssg: 'Successfully fetched the problem',
            error: {},
            data: problem
        });
    } catch (error) {
        next(error);
    }
}

async function getProblems(req,resp,next){
    try {
        const response=await problemService.getAllProblems();
        return  resp.status(StatusCodes.OK).json({
            success: true,
            mssg: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req,resp,next){
    try {
        const response=await problemService.deleteProblem(req.params.id);
        return resp.status(StatusCodes.OK).json({
            sucess: true,
            mssg: 'Successfully deleted the problem',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

function updateProblem(req,resp,next){
    try {
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingController
}