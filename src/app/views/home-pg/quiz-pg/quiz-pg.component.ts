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
  btnArr: {text: string, isdisabled: boolean}[] = [{text: "Next", isdisabled: false}];
  currentIndex: number = 0;
  questions: string[] = [];
  timeLeft: number = 10;
  interval: any;

  constructor(private proxy: ProxyHttpService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {console.log(this.btnArr)
    this.actRoute.params.subscribe(params => {
      this.getQuestions(`https://opentdb.com/api.php?amount=10&category=${params.categId}&difficulty=${params.difficultyId}&type=${params.type}`)
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getQuestions(apiUrl: string) {
    this.proxy.get(apiUrl).subscribe(response => {
      console.log(response.results)
      this.questions = response.results;
      this.startTimer()
    });
  }

  btnClickNextQuestion() {
    this.startTimer()
    if (this.currentIndex != this.questions.length - 1) {
      this.currentIndex++
    } else if (this.currentIndex == this.questions.length - 1) {
        this.btnArr[0].isdisabled = true
    }
  }

  startTimer() {
    this.timeLeft = 10;
    if (this.questions.length > 0) {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else if (this.timeLeft == 0 && this.currentIndex != this.questions.length - 1) {
          this.currentIndex++
          clearInterval(this.interval);
          this.startTimer()
        } else if (this.timeLeft == 0 && this.currentIndex == this.questions.length - 1) {
          Swal.fire({
            icon: 'error',
            title: 'Time\'s up',
            text: "If you want to play again, Please, reset"
          })
          clearInterval(this.interval);
        }
      }, 1000)
    } else {
      Swal.fire({
        title: "No cards",
        icon: "error",
        text: "Please, try another combination of category, difficulty and type"
      })
    }
  }

}
