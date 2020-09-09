import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  postdata={};
  gethttpData()
  {
    return this.http.get("http://localhost:8080/profile");

  }
  getallStudents()
  {
    return this.http.get("http://localhost:8080/showstudents");
  }
  enablehttpData(id)
  {
    console.log(id);
    this.postdata ='{"rollno":'+id+'}';
    return this.http.post("http://localhost:8080/enableuser",this.postdata,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
}
