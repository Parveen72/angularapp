import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/myservice.service';

@Component({
  selector: 'app-forservices',
  templateUrl: './forservices.component.html',
  styleUrls: ['./forservices.component.css']
})
export class ForservicesComponent implements OnInit {

  userdata={};
  constructor(private myserve : MyServiceService) { }

  ngOnInit() {
    this.myserve.getUserInfo().subscribe((data => {
      this.userdata=data;
    }))
  }


}
