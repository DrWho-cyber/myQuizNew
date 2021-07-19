import { Component, Input, OnInit } from '@angular/core';
import { answersArrObjectModel } from 'src/app/models/answersArrObject.model';
import { QuestionModel } from 'src/app/models/question.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()question:any;
  questionObject:QuestionModel = new QuestionModel("","","","");
  answersArr: [] = [];
  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.answersArr);
    this.CheckanswersArrcreat()
  }

 CheckanswersArrcreat(){
  this.questionObject.correct_answer = this.question.correct_answer;
  this.questionObject.incorrect_answer1 = this.question.incorrect_answers[0];
  this.questionObject.incorrect_answer2 = this.question.incorrect_answers[1];
  this.questionObject.incorrect_answer3 = this.question.incorrect_answers[2];
  return this.questionObject
 }
  
  
  shuffle(array:any[]) {
    let arrIndex = 0;
    let answersArrObject:answersArrObjectModel = new answersArrObjectModel(`${this.question.correct_answer}`,true,"");
    array.push(answersArrObject);
  this.question.incorrect_answers.forEach((element:any) => {
    let answersArrObject2 = new answersArrObjectModel(`${element}`,false,"");
    array.push(answersArrObject2);
  });
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    arrIndex++
    console.log(array[arrIndex].correct)
    
    return array;
  }

  checkAnswer(answer:any){
   if (answer == this.questionObject.correct_answer) {
    
  console.log("correct")
   }else {
   console.log("incorrect");
   
  }

  }

}
