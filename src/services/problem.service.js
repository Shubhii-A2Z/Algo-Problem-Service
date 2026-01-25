const { markdownSanitizer } = require("../utils");

class problemService{
    constructor(problemRepository){
        this.problemRepository=problemRepository;
    }

    async createProblem(problemData){
        try {
            // 1. sanitize the markdown for description
            problemData.description=markdownSanitizer(problemData.description);

            const problem=await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems=await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem=await this.problemRepository.getProblem(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const response=await this.problemRepository.deleteProblem(id);
            return response;
        } catch (error) {
            throw error;
        }
    }
}   

module.exports=problemService;