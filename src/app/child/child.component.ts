import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
 
 // Send data from Parent to Chend Use Input Decoretor
 // @Input() data : string;
  @Input() empdata :any[];

  //Send data from Chield to Parent Use Output Decoretor
  //chielData:string="Hello I from Chield Data";
product :any=[
  {'productId' :101,'ProductName':"Notebook",'Price':200,'Rating':4},
  {'productId' :401,'ProductName':"Book",'Price':500,'Rating':3},
  {'productId' :714,'ProductName':"Pen",'Price':100,'Rating':4.5},
  {'productId' :541,'ProductName':"Pencile",'Price':50,'Rating':3}
]
// @Output() chieldOutput : EventEmitter<string> = new EventEmitter();
 @Output() productOutput: EventEmitter<string> = new EventEmitter();
  constructor() { 

  }

  ngOnInit() {
    console.log(this.empdata);
    
  }
senddata()
{
  //this.chieldOutput.emit(this.chielData);
  this.productOutput.emit(this.product);
  
}
}
