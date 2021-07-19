export class answersArrObjectModel {
    public answer:string = "";
    public correct: boolean = false;
    public classColorChange: string = ""

    constructor(answer:string, correct: boolean, classColorChange:string){
        this.answer = answer;
        this.correct = correct;
        this.classColorChange = classColorChange;
    }

}