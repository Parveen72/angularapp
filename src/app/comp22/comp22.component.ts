import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-comp22',
  templateUrl: './comp22.component.html',
  styleUrls: ['./comp22.component.css']
})
export class Comp22Component implements OnInit {
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
