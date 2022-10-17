import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators , FormArray} from '@angular/forms';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-myreactiveform',
  templateUrl: './myreactiveform.component.html',
  styleUrls: ['./myreactiveform.component.css']
})
export class MyreactiveformComponent implements OnInit {
  showdata:boolean=false;
  constructor(private Demo:DemoService) {
    this.createForm();
  
   }

  ngOnInit() {
    this.Demo.hello();
  }
  myReactiveForm:FormGroup;

  
  createForm(){
    this.myReactiveForm = new FormGroup({
      'userDetail' :new FormGroup({
        'username': new FormControl(null,Validators.required),
        'email' : new FormControl(null,Validators.required)
      }),
      
      'course' : new FormControl('Angular'),
      'skills' : new FormArray([new FormControl(null,Validators.required)])

    })
  }
OnSubmit(){
  console.log(this.myReactiveForm.value);
  this.showdata=true;
}
AddSkills(){
  const cnt= new FormControl(null);
 (<FormArray> this.myReactiveForm.get('skills')).push(cnt);
}
RemoveSkills(i){
  
 (<FormArray> this.myReactiveForm.get('skills')).removeAt(i);
}
// NaEmails(control: FormControl) : Promise<any> | Observable<any> {
//   const myResponse = new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       if (control.value === 'codemindtechnology@gmail.com') {
//         resolve({'emailNotAllowed': true})
//       } else {
//         resolve(null)
//       }
//     }, 5000)
//   })
//   return myResponse;
//  }
// this.NaEmails),

}
