import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-comp33',
  templateUrl: './comp33.component.html',
  styleUrls: ['./comp33.component.css']
})
export class Comp33Component implements OnInit {
username;
  constructor(private dm : DemoService) {
    this.dm.userName.subscribe(res=>{
      this.username=res;
    })
   }

  ngOnInit() {
  }
onClick(username){
  this.dm.userName.next(username.value);
}
}
