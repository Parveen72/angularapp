import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  backToTablet()
{
  this._router.navigate(['products']);

}

}
