export class answersArrObjectModel {
    public answer:string = "";
    public correct: boolean = false;
    public classColorChange: string = ""
    public clicked: boolean = false;

    constructor(answer:string, correct: boolean, classColorChange:string,clicked: boolean){
        this.answer = answer;
        this.correct = correct;
        this.classColorChange = classColorChange;
        this.clicked = clicked;
    }

}