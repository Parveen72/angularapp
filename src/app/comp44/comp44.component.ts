import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-comp44',
  templateUrl: './comp44.component.html',
  styleUrls: ['./comp44.component.css']
})
export class Comp44Component implements OnInit {
username;
  constructor(private dm: DemoService) {
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
