import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( ) { }

  checkUserNameandPassword(uname:string, pwd:string) {
    if(uname == "ad" && pwd == "ad123")
    {
      localStorage.setItem('username', "admin");
      return true;
    }
    else {
     return false;
    }
  }
}