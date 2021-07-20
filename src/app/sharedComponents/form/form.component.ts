import { Component, OnInit } from '@angular/core';
import { ProxyHttpService } from 'src/app/services/proxy-http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  categoryApiUrl:string = "https://opentdb.com/api_category.php"
  categories:any[] = [];
  
  constructor(private proxy: ProxyHttpService) { }

  getQuestions(apiUrl: string) {
    this.proxy.get(apiUrl).subscribe(response => {
      this.categories = response.trivia_categories;
    });
}

  ngOnInit(): void {
    this.getQuestions(this.categoryApiUrl)
  }

  takeId(event:Event){
  let id = (event.target as HTMLElement)
  console.log(id)
  }

}
