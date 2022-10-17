import { Component, OnInit } from '@angular/core';
import { NgForm , SelectControlValueAccessor} from '@angular/forms';
import { table } from 'console';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  sub :string[]=["Angular","Java",".Net","Python","React"];
  evalidater:boolean=false;


  constructor() { }

  ngOnInit() {
  }
  userData:any={
    rollno:'',
    stdname:'',
    email:'',
    gender:'',
    mob:'',
    course:'',
    date:''

  }
  em:string='@codemind.com';
  p:string;
  showForm:boolean=false;
  defalultValue:string='Angular';
  currentDate:any=new Date();
  OnSubmit(form:NgForm){
  
  console.log(form.value);
  this.userData.rollno=form.value.rollno;
  this.userData.stdname=form.value.stdname;
  this.userData.email=form.value.email;
  this.userData.gender=form.value.gender;
  this.userData.mob=form.value.mob;
  this.userData.course=form.value.course;
  this.userData.date=form.value.date;
  //console.log(this.today);
  
  this.showForm=true;
  form.reset();
  form.controls['course'].setValue('Angular');
  form.controls['gender'].setValue('Male');
  
}
checkemail(email)
{
  console.log(email.value);
  var i = (email.value).indexOf('@');   // i=>index of @
  this.p =(email.value).slice(i);  // p=>postfix of email(slice from @ to end) 
  console.log(this.p);
  if(this.em === this.p)
    this.evalidater = false;
  else 
    this.evalidater= true;
}
}
