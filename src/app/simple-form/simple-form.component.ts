import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  sub :string[]=["Angular","Java",".Net","Python","React"];
  constructor() { }

  ngOnInit() {
  }
OnSubmit(form:NgForm){
  console.log(form);
  
}
}
