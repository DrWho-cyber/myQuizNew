export class QuestionModel {
    public correct_answer:string = "";
    public incorrect_answer1:string = "";
    public incorrect_answer2:string = "";
    public incorrect_answer3:string = "";

    constructor(correct_answer:string, incorrect_answer1:string, incorrect_answer2:string, incorrect_answer3:string){
        this.correct_answer = correct_answer;
        this.incorrect_answer1 = incorrect_answer1;
        this.incorrect_answer2 = incorrect_answer2;
        this.incorrect_answer3 = incorrect_answer3;
    }

}