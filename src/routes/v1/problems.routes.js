const express=require('express');
const { ProblemController } = require('../../controllers');

const problemRouter=express.Router();

// if any request comes and route continues with /ping, we map it to pingController
problemRouter.get('/ping',ProblemController.pingController);

problemRouter.get('/:id',ProblemController.getProblem);

problemRouter.get('/',ProblemController.getProblems);

problemRouter.post('/',ProblemController.addProblem);

problemRouter.delete('/:id',ProblemController.deleteProblem);

problemRouter.put('/:id',ProblemController.updateProblem);


module.exports=problemRouter;