import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  url:string='https://jsonplaceholder.typicode.com/users';
  
  constructor(private http:HttpClient) { }
  
  getUserInfo(){
   return this.http.get(this.url);
  }
}
