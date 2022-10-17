import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { myAPI } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
url:string='https://jsonplaceholder.typicode.com/users';
userName=new Subject<any>();
product=[
  {id:12,name:'Laptop'},
  {id:22,name:'Palmtop'},
  {id:33,name:'Desktop'}
]
rn =  new Subject<any>();
stdname =  new Subject<any>();
per =  new Subject<any>();
res =  new Subject<any>();

  constructor(private httpclient:HttpClient) { 
    
  }
hello(){
    alert('I Am from DemoService');
  }
  getUser()
  {
   return  this.httpclient.get(this.url);
    
  }

  // createPost(post):Observable<any>{
  //   let endPoints="posts";
  //   return this.httpclient.post<any>('${myAPI  +endPoints}')
  // }
}