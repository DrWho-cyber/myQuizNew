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

  btnClick(event:Event){
  let innerText = (event.target as HTMLElement)
   this.btnClickEmit.emit(innerText)
   console.log(innerText)
  }

}
