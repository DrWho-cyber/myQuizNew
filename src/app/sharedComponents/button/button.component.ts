import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()btn:string = "";
  @Output() btnClickEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(btn:string){
   this.btnClickEmit.emit(btn)
   console.log(btn)
  }

}
