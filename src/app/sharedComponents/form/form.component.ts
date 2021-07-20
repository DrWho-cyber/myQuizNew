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
  disable:boolean = false 
  categoryApiUrl:string = "https://opentdb.com/api_category.php"
  categories:any[] = [];
  currentId:any = 0;
  currentDifficaltyValue:any;
  constructor(private proxy: ProxyHttpService,
    private route: Router
    ) { }

  getQuestions(apiUrl: string) {
    this.proxy.get(apiUrl).subscribe(response => {
      this.categories = response.trivia_categories;
    });
    
    console.log(this.categories)
}

  ngOnInit(): void {
    this.getQuestions(this.categoryApiUrl)
    
  }

  onselect1(event:Event){
  this.currentId = event;
  console.log(this.currentId)
  }

  onselect2(event:Event){
    this.currentDifficaltyValue = event;
    console.log(this.currentId)
    }

  onClickdisable(){
    this.disable = true
    this.title = "STARTED"
   }

   onStartClick(){
     this.route.navigate(['./quiz/' + this.currentId + this.currentDifficaltyValue]);
   }

}
