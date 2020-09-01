import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-buttons',
  templateUrl: './app-buttons.component.html',
  styleUrls: ['./app-buttons.component.css']
})
export class AppButtonsComponent implements OnInit {

  isInvoiceOperation = false
  numbers = '1234567890'
  cleanTheCalc = false
  inputButtonValue: string = ''
  operatorActivated = false
  activeCalc = false
  firstValue = ''
  secondValue = ''
  operator

  @Output() inputsButtons = new EventEmitter();
  ngOnInit(): void {
  }

  onClickButton(clickButton){
    if(this.cleanTheCalc && this.numbers.includes(clickButton)){
      this.inputButtonValue = ''
      this.firstValue = ''
      this.secondValue = ''
    }

    this.cleanTheCalc = false
    this.activeCalc = true
    this.checkValueButton(clickButton)
    this.inputsButtons.emit(this.inputButtonValue)
  }

  setValueToPresent(){
    if(this.inputButtonValue.length === 1 && this.inputButtonValue[0] === 0 + ''){
      return
    }

    if(this.operatorActivated){
      this.secondValue = Number(this.secondValue) / 100 + ''
      this.inputButtonValue = this.secondValue
      this.inputsButtons.emit(this.inputButtonValue)
      console.log(this.secondValue)
      return
    }
    this.firstValue = Number(this.firstValue) / 100 + ''
    this.inputButtonValue = this.firstValue
    this.inputsButtons.emit(this.inputButtonValue)
    console.log(this.firstValue)
  }

  resetCalculator(){
      this.activeCalc = false
      this.firstValue = ''
      this.secondValue = ''
      this.inputButtonValue = '0'
      this.operatorActivated = false
  }

  setResultIvoiceOperation(){
      this.cleanTheCalc = true
      this.performCalc()
      this.secondValue = ''
      this.firstValue = this.inputButtonValue
      this.operatorActivated = false
  }

  checkValueButton(clickButtonn){
    //reset calculator
    if(clickButtonn === 'C' || clickButtonn === 'AC') {
      this.resetCalculator()
      return
    }

    if(clickButtonn === '%'){
      this.setValueToPresent()
      return
    }

    if(clickButtonn === '='){
      console.log(this.firstValue + ' ' + this.secondValue)
      this.setResultIvoiceOperation()
      return
    }

    if(clickButtonn == '-+'){
      console.log(this.firstValue + 'before +-')
      this.setNumberToInactiveOrAcrive()
      console.log(this.firstValue + 'after +-')
      return
    }

    if(clickButtonn === '*' || clickButtonn === '-' || clickButtonn === '+' || clickButtonn === '/')
    {
      if(this.secondValue.length > 0){
        this.performCalc()
        this.secondValue = ''
        this.firstValue = this.inputButtonValue
        console.log(this.firstValue)
      }
      this.operatorActivated = true
      this.operator = clickButtonn
      return
    }

    if(this.operatorActivated){
      if(clickButtonn === '.'){
        if(this.secondValue.includes('.')){
          return
        }
      }
      this.secondValue += clickButtonn
      this.inputButtonValue = this.secondValue
      return
    }
    if(clickButtonn === '.'){
      if(this.firstValue.includes('.')){
        return
      }
    }
    this.firstValue += clickButtonn
    this.inputButtonValue = this.firstValue
  }

  performCalc(){
    switch(this.operator) {
      case '*': {
         this.inputButtonValue = Number(this.firstValue) * Number(this.secondValue) + ''
         break;
      }
      case '-': {
        this.inputButtonValue = Number(this.firstValue) - Number(this.secondValue) + ''
         break;
      }
      case '+': {
        this.inputButtonValue = Number(this.firstValue) + Number(this.secondValue) + ''
        break;
     }
      default: {
        this.inputButtonValue = Number(this.firstValue) / Number(this.secondValue) + ''
         break;
      }
   }

  }

  setNumberToInactiveOrAcrive(){
    if(this.operatorActivated){
      if(this.secondValue.length === 0){
        return
      }
      if(this.secondValue[0] === '-'){
        this.inputButtonValue = this.inputButtonValue.substr(1)
        this.secondValue = this.secondValue.substr(1)
        return
      }
      this.inputButtonValue = '-' + this.inputButtonValue
      this.secondValue = '-' + this.secondValue
      return
    }

    if(this.inputButtonValue.length === 0){
      return
    }
    if(this.inputButtonValue[0] === '-'){
      this.inputButtonValue = this.inputButtonValue.substr(1)
      this.firstValue = this.firstValue.substr(1)
      return
    }
    this.inputButtonValue = '-' + this.inputButtonValue
    this.firstValue = '-' + this.firstValue
  }
}
