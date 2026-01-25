const { StatusCodes } = require('http-status-codes');
const problemController=require('../src/controllers/problems.controllers');
const problemService = require('../src/services/problem.service');

// MOCKING the service object since controller object is dependent on service object
jest.mock('../src/services/problem.service');

describe('Tests for Controller Layer',()=>{
    beforeEach(()=>{
        req={};
        resp={
            status: jest.fn(()=>resp),
            json: jest.fn()
        };
        next=jest.fn();
    });

    test('Getting All Problems',async ()=>{ 
        const problems=[];
        problemService.prototype.getAllProblems.mockResolvedValue(problems);

        await problemController.getProblems(req,resp,next);

        expect(resp.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(problemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
        expect(next).not.toHaveBeenCalled();
    });

    test('Getting a problem calling next in case of error',async ()=>{
        const mockError=new Error('id',10);
        problemService.prototype.getProblem.mockRejectedValue(mockError);

        req.params={id:10};
        await problemController.getProblem(req,resp,next);

        expect(next).toHaveBeenCalledWith(mockError);
        expect(resp.status).not.toHaveBeenCalled();
        expect(resp.json).not.toHaveBeenCalled();
    });

});