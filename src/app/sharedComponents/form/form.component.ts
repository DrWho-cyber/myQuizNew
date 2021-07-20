import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProxyHttpService } from 'src/app/services/proxy-http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:string ="START";
  
  categoryApiUrl:string = "https://opentdb.com/api_category.php"
  categories:any[] = [];
  currentId:any = 0;
  currentType: any;
  currentDifficaltyValue:string = "";
  constructor(private proxy: ProxyHttpService,
    private route: Router
    ) { }

  getQuestions(apiUrl: string) {
    this.proxy.get(apiUrl).subscribe(response => {
      this.categories = response.trivia_categories;
    });
    
    
}

  ngOnInit(): void {
    this.getQuestions(this.categoryApiUrl)
    
  }

   onStartClick(){ console.log(this.currentId, this.currentDifficaltyValue)
     this.route.navigate([`./quiz/${this.currentId}/${this.currentDifficaltyValue}/${this.currentType}`]);
     this.currentId = null;
     this.currentDifficaltyValue = "";
     this.currentType = null;
    
   }

}
