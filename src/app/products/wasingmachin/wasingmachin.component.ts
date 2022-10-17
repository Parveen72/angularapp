import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-wasingmachin',
  templateUrl: './wasingmachin.component.html',
  styleUrls: ['./wasingmachin.component.css']
})
export class WasingmachinComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
backTomachine()

{
  this._router.navigate(['Products']);
}}
