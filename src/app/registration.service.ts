import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  rollno:number;
  name:string;
  password:string;
  email:string;
  postdata={};
  constructor(private http:HttpClient) { }
  
  setRollno(rollno)
  {
    this.rollno = rollno;
  }
  setName(name)
  {
    this.name = name;
  }
  setPassword(password)
  {
    this.password = password;
  }
  posthttpData(rollno,name,password)
  {
    this.postdata ='{"rollno":'+rollno+',"name":'+name+',"password":'+password+'}';
    return this.http.post("http://localhost:8080/register",this.postdata,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  
}
