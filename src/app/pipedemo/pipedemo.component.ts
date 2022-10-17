import { viewClassName } from '@angular/compiler';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit  {

  presentDate = new Date();
  name = "codemind";
  price = 10000;
  myObservable: any;
  josnData = { id: 'one', name:'codemind'};
  digits: number = 100;
  namesearch: string = '';
  productArr: any[] = [
    {
      sno: 1,
      name: 'mobile',
      price: 19000,
      avaibility: 'Available'
    },
    {
      sno: 2,
      name: 'TV',
      price: 29000,
      avaibility: 'Available'
    },
    {
      sno: 3,
      name: 'Washing machine',
      price: 190000,
      avaibility: 'Not Available'
    },
    {
      sno: 4,
      name: 'Tab',
      price: 39000,
      avaibility: 'Available'
    }
  ]
  constructor() { }
 
  ngOnInit() {
  //console.log(this.productArr); 

  //this.myObservable = of('This is my custom observable').pipe(delay(3000));
   
  }
  addproduct(val){
   this.productArr.push(
    {
      sno:5,
      name:val.value,
      price:78000,
      avaibility:'Available'
  });



}
}

