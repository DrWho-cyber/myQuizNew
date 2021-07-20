import { Component, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/services/proxy-http.service';

@Component({
  selector: 'app-quiz-pg',
  templateUrl: './quiz-pg.component.html',
  styleUrls: ['./quiz-pg.component.css']
})
export class QuizPgComponent implements OnInit {
  categoryApiUrl: string = "https://opentdb.com/api_count.php?category=";
  btnArr: string[] = ["Prev", "Next"];
  currentIndex:number = 0;
  questions:any[] = [];
  constructor(private proxy: ProxyHttpService) { }

  ngOnInit(): void {
    this.getQuestions("https://opentdb.com/api.php?amount=10")
  }

  getQuestions(apiUrl: string) {
    console.log(apiUrl)
    this.proxy.get(apiUrl).subscribe(response => {
      console.log(response.results)
      this.questions = response.results;
    });
}

btnClickNextOrPrevQuestion (btn:string){
  if(btn == "Next"){
    this.currentIndex++}
  else{
    this.currentIndex--
  }
  console.log(this.currentIndex,btn)
}


}
