import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg;
  constructor(private _router :Router,private _authservice:AuthServiceService) {
   
   }

  ngOnInit() {
  }
  login1(username: string, password: string) {
    var output = this._authservice.checkUserNameandPassword(username, password);
    if(output == true) 
    {
      this._router.navigate(['/products']);
    }
    else {
        this.msg = "Invalid user name and password";
    }
}

}
