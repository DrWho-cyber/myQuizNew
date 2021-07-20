import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})


export class HomePgComponent implements OnInit {
  title:string ="START";
  disable:boolean = false 
  
  constructor() { }

ngOnInit(): void {
  
}

  onClickdisable(){
   this.disable = true
   this.title = "STARTED"
  }

}
