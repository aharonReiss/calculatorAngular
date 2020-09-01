import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-pody-calculator',
  templateUrl: './app-pody-calculator.component.html',
  styleUrls: ['./app-pody-calculator.component.css']
})
export class AppPodyCalculatorComponent implements OnInit {

  constructor() { }
  numbers:string = ''
  //@Output() inputsNumberBodyCalc = new EventEmitter()
  ngOnInit(): void {
  }
  onInputButtons(event:string){
    this.numbers = event
    //console.log(event)
    //this.inputsNumberBodyCalc.emit(event)
  }

}
