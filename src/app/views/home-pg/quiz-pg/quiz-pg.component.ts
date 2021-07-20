import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProxyHttpService } from 'src/app/services/proxy-http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-pg',
  templateUrl: './quiz-pg.component.html',
  styleUrls: ['./quiz-pg.component.css']
})
export class QuizPgComponent implements OnInit {
  btnArr: string[] = ["Next"];
  currentIndex: number = 0;
  questions: string[] = [];
  constructor(private proxy: ProxyHttpService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.getQuestions(`https://opentdb.com/api.php?amount=10&category=${params.categId}&difficulty=${params.difficultyId}&type=${params.type}`)
    })
  }

  getQuestions(apiUrl: string) {
    console.log(apiUrl)
    this.proxy.get(apiUrl).subscribe(response => {
      console.log(response.results)
      this.questions = response.results;
    });
  }

  btnClickNextQuestion() {
    if (this.currentIndex != this.questions.length - 1) {
      this.currentIndex++
    } else if (this.currentIndex == this.questions.length - 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "No More Questions"
      })
    }
  }


}
