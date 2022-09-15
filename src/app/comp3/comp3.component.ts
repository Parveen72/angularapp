import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
name:string = "Codeminde";
description:string ="Hello Angular";
imageUrl = 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg';

firstName:string = "Pari";
  constructor() { }

  ngOnInit() {
  }
show(){
  alert("Method Called");
}
}
