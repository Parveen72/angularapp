import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  employee : any[] = [
    {'Emp_ID': 101,'Emp_Name':"Parveen",'Department':"IT",'Salary':75000,'Company':"TCS"},
    {'Emp_ID': 102,'Emp_Name':"Ritu",'Department':"HR",'Salary':50000,'Company':"Wipro"},
    {'Emp_ID': 103,'Emp_Name':"Shireen",'Department':"Finance",'Salary':47000,'Company':"TCS"},
    {'Emp_ID': 104,'Emp_Name':"Neha",'Department':"Finance",'Salary':45000,'Company':"Info"},
    {'Emp_ID': 105,'Emp_Name':"Rashma",'Department':"IT",'Salary':40000,'Company':"Wipro"},
    {'Emp_ID': 106,'Emp_Name':"Niraj",'Department':"IT",'Salary':75000,'Company':"TCS"},
    {'Emp_ID': 107,'Emp_Name':"Raj",'Department':"HR",'Salary':85000,'Company':"Info"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
