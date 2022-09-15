import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})


export class NgForComponent implements OnInit {

  array_of_singer : Singer[] =[
    {NameOfSinger: "Neha" , noOfSongs :78},
    {NameOfSinger: "KK" , noOfSongs :100},
    {NameOfSinger: "Ali" , noOfSongs :48},
    {NameOfSinger: "Alka" , noOfSongs :178}
  
  
  ]
  constructor() { }

  ngOnInit() {
  }
 

}
class Singer{
  NameOfSinger:string;
  noOfSongs:number;
}
