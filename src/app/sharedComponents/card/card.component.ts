import { Component, Input, OnInit } from '@angular/core';
import { QuestionModel } from 'src/app/models/question.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()question:any;
  questionObject:QuestionModel = new QuestionModel("","","","");
  answersArr: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.answersArr);
    this.CheckanswersArrcreat()
    console.log(this.answersArr[2])
  }

 CheckanswersArrcreat(){
  this.questionObject.correct_answer = this.question.correct_answer;
  this.questionObject.incorrect_answer1 = this.question.incorrect_answers[0];
  this.questionObject.incorrect_answer2 = this.question.incorrect_answers[1];
  this.questionObject.incorrect_answer3 = this.question.incorrect_answers[2];
  console.log(this.questionObject)
  return this.questionObject
 }
  
  
  shuffle(array:any[]) {
   
    array.push( this.question.correct_answer);

  this.question.incorrect_answers.forEach((element:any) => {
    array.push(element);
  });
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    console.log(array)
    
    return array;
  }

}
