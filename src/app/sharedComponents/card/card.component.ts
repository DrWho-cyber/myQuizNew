import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() question:any;
  answersArr: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.answersArr);
  }


  
  
  shuffle(array:any[]) {
    array.push(this.question.correct_answer);

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
