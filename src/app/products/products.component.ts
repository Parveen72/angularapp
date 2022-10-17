import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  backk(){
    localStorage.clear();

    this.route.navigate(['/login']);
  }

}
