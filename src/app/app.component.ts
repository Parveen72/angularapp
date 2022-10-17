import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private Demo:DemoService){

  }
  title = 'angularapp';
  dataFromParent:string ="Hello! i am From Parent Component";
  //Parent Data of Employees
  employee : any[] = [
    {'Emp_ID': 101,'Emp_Name':"Parveen",'Department':"IT",'Salary':75000,'Company':"TCS"},
    {'Emp_ID': 102,'Emp_Name':"Ritu",'Department':"HR",'Salary':50000,'Company':"Wipro"},
    {'Emp_ID': 103,'Emp_Name':"Shireen",'Department':"Finance",'Salary':47000,'Company':"TCS"},
    {'Emp_ID': 104,'Emp_Name':"Neha",'Department':"Finance",'Salary':45000,'Company':"Info"},
    {'Emp_ID': 105,'Emp_Name':"Rashma",'Department':"IT",'Salary':40000,'Company':"Wipro"},
    {'Emp_ID': 106,'Emp_Name':"Niraj",'Department':"IT",'Salary':75000,'Company':"TCS"},
    {'Emp_ID': 107,'Emp_Name':"Raj",'Department':"HR",'Salary':85000,'Company':"Info"}
  ]
  prod={};
ngOnInit(): void {
  //this.Demo.hello();
  //console.log(this.Demo.product);
  //this.prod=this.Demo.product;
  this.Demo.getUser().subscribe((data =>{
    this.prod=data;
  }))
}

  getvaluefromChield(value){
    console.log(value);
    
  }
}


