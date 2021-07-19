import { Component, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/services/proxy-http.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})


export class HomePgComponent implements OnInit {
  btnArr: string[] = ["Prev", "Next"];
  currentIndex:number = 0;
  questions:any[] = [];
  constructor(private proxy: ProxyHttpService) { }

  ngOnInit(): void {
    this.getQuestions("https://opentdb.com/api.php?amount=10")
  }

  getQuestions(apiUrl: string) {
    let apiUrlbase: string = "https://opentdb.com/api.php?amount=10";
    
    console.log(apiUrlbase)
    this.proxy.get(`${apiUrlbase}`).subscribe(response => {
      console.log(response.results)
      this.questions = response.results;
    });
}

btnClickNext (event:Event){
  this.currentIndex++
  console.log(this.currentIndex,event)
}

btnClickPrev (){
  this.currentIndex--
}

}
