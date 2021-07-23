import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()btn:any;
  @Input()isDisabled:boolean = false;
  @Output() btnClickEmit = new EventEmitter();
  
  constructor() { }
 
  ngOnInit(): void {
  }

  btnClick(btn:string){
   this.btnClickEmit.emit(btn) 
  }


}
