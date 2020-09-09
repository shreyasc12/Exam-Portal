import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rollno:number;
  password:string;
  user_type;
  flag=1;
  postdata={};
  constructor(private http:HttpClient) { 
    
  }
  setpassword(password)
  {
    console.log("**Pswword:"+password);
    this.password=password;
  }
  getFlag()
  {
    return this.flag;
  }
  getRollno()
  {
    return this.rollno;
  }
  setRollno(rollno)
  {
    this.rollno = rollno;
  }
  setUser(user){
    console.log("**user:"+user);
    this.user_type = user; 
  }
  getUser()
  {
    return this.user_type;
  }
  posthttpData(rollno,password)
  {
    this.flag=0;
    console.log(this.flag);
    this.postdata ='{"rollno":'+rollno+',"password":'+password+'}';
    return this.http.post("http://localhost:8080/login",this.postdata,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      
      })
    });
  }
}
