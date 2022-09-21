import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  post:string=''; 
  ParentArray:any[]=[];
  constructor() { }

  ngOnInit() {
    //console.log(this.post);

  }
addData(value)
{
  this.post=value;
  console.log(this.post);
  this.ParentArray.push(this.post);
  
}
deleteChild(val)
{
  var i=this.ParentArray.indexOf(val)
  this.ParentArray.splice(i,1);
  
}
}
