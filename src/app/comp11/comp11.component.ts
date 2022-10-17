import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css']
})
export class Comp11Component implements OnInit {
username;
  constructor(private _dm : DemoService) { 
    this._dm.userName.subscribe(res=>{
      this.username=res;
    })
  }

  ngOnInit() {
  }
onClick(username)
{
  this._dm.userName.next(username.value);
}
}
