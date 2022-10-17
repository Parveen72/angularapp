import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
backToLaptop()
{
  this._router.navigate(['products']);

}
}
