import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
  }
  backTOser1()
  {
    this.r.navigate(['service']);
  }

}
