import { Component, OnInit, Input, Output, ViewChild, ElementRef, OnChanges } from '@angular/core';
//import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  //output = new FormControl('')

  Pixelsize = 48
  countNumbersInOutPut = 0
  fontSize = 50
  kaful = 4
  number1 = 1
  number2 = 2
  constructor() { }
  @ViewChild ('output', { static: true }) out: ElementRef;
  @Input() inputsNumber: string
  //@Input() getNumbers: string
  ngOnInit(): void {
  }
  
  ngOnChanges(){
      if(this.inputsNumber.length > 10){
        this.Pixelsize = (49 / this.inputsNumber.length) * 10
      }
      else{
        this.Pixelsize = 49
      }
      (this.out.nativeElement as HTMLParagraphElement).style.fontSize = this.Pixelsize + 'px'
      this.countNumbersInOutPut = 0
  }
}
