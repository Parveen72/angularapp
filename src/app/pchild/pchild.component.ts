import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pchild',
  templateUrl: './pchild.component.html',
  styleUrls: ['./pchild.component.css']
})
export class PchildComponent implements OnInit {
@Input() ChildArray:any[]=[];
@Output() RemoveChild:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
RemoveData(val)
{
  //this.RemoveChild.emit(this.ChildArray);
  var i=this.ChildArray.indexOf(val)
  this.ChildArray.splice(i,1);
}
}
