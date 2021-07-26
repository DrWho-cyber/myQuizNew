import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { answersArrObjectModel } from 'src/app/models/answersArrObject.model';
import { QuestionModel } from 'src/app/models/question.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() timeLeft: number = 0;
  _question: any;
  questionObject: QuestionModel = new QuestionModel("", "", "", "");
  answersArr: answersArrObjectModel[] = [];
  answersArrTemp: answersArrObjectModel = new answersArrObjectModel ("falseAnswer", false, "", false);
  correctAnswers: number = 0;

  @Input() set question(event: any) {
    if (event) { 
      this.answersArr = []
      this._question = event;
      this.shuffle(this.answersArr);
      this.CheckanswersArrcreat()
    }

  };

  get question() {
    return this._question
  }

  @Output()cardClick = new EventEmitter()

  constructor() { }

  ngOnChanges(){
    if(this.timeLeft == 0){
      this.checkAnswer(this.answersArrTemp)
    }
  }

  ngOnInit(): void {  }

  CheckanswersArrcreat() {
    this.questionObject.correct_answer = this.question.correct_answer;
    this.questionObject.incorrect_answer1 = this.question.incorrect_answers[0];
    this.questionObject.incorrect_answer2 = this.question.incorrect_answers[1];
    this.questionObject.incorrect_answer3 = this.question.incorrect_answers[2];
    return this.questionObject
  }


  shuffle(array: any[]) {
    let arrIndex = 0;
    let answersArrObject: answersArrObjectModel = new answersArrObjectModel(`${this.question.correct_answer}`, true, "", false);
    array.push(answersArrObject);
    this.question.incorrect_answers.forEach((element: any) => {
      let answersArrObject2 = new answersArrObjectModel(`${element}`, false, "", false);
      array.push(answersArrObject2);
    });
    var currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    arrIndex++
    return array;
  }

  checkAnswer(answer: any) {
    
    if (answer.answer == this.questionObject.correct_answer) {
      answer.classColorChange = "correctAnsw";
      this.answersArr.forEach(element => {
          element.clicked = true
        
      });
      this.correctAnswers++
      if (this.correctAnswers == 6) {
        Swal.fire({
          icon: 'success',
          text: `You Won, You gained: ${this.correctAnswers} Correct Answer`
        })
      }

    } else {
      answer.classColorChange = "incorrectAnsw";
      this.answersArr.forEach(element => {
          element.clicked = true
          if(element.answer == this.questionObject.correct_answer){
             element.classColorChange = "correctAnsw";
          }
      });
    }
    setTimeout(() => {
      this.cardClick.emit(answer.answer)
    }, 1000)
  }

  getClicked() {
    let clickedBtn = this.answersArr.find(x => x.clicked)
    return clickedBtn
  }

}
