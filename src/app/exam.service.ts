import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  exam_id:number;
  params={};
  postdata={};
  
  constructor(private http:HttpClient) { }
  // posthttpData(rollno,password)
  // {
  //   this.postdata ='{"rollno":'+rollno+',"password":'+password+'}';
  //   return this.http.post("http://localhost:8080/login",this.postdata,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json'
      
  //     })
  //   });
  // }
  gethttpData()
  {
    return this.http.get("http://localhost:8080/alltest");
  }
  getQuesData(id)
  {
    console.log("$$$: --"+id);
    this.params='{"examid":'+id+'}';
    console.log(this.params);
      return this.http.post("http://localhost:8080/test",this.params,{
              headers:new HttpHeaders({
        'Content-Type':'application/json'
      
      })
      });
  }
  getmyExams(rollno)
  {
    this.params='{"rollno":'+rollno+'}';
    return this.http.post("http://localhost:8080/myexams",this.params,{
              headers:new HttpHeaders({
        'Content-Type':'application/json'
      
      })
      });
  }
  createexamhttp(id,name)
  {
    this.postdata ='{"examid":'+id+',"exam_name":'+name+'}';
    return this.http.post("http://localhost:8080/createexam",this.postdata,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  submitquestion(id,question,opt1,opt2,opt3,correctans,marks)
  {
    this.postdata ='{"question":'+question+',"option1":'+opt1+',"option2":'+opt2+',"option3":'+opt3+',"correctoption":'+correctans+',"marks":'+marks+'}';
    return this.http.post("http://localhost:8080/addquestion/"+id,this.postdata,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  submitexam(id,rollno,answers)
  {
    //{"fruits":["apple","orange"]}
    //{"ans":"this.option_selected","this.option_selected","this.option_selected","this.option_selected"}
    //{"ans":[good,django,Both,ARPANET]}
    this.postdata ='{"ans":['+answers+']}';
    console.log(this.postdata);
    return this.http.post("http://localhost:8080/submittest/"+id+"/"+rollno,this.postdata,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  getmyInfo(rollno)
  {
    this.params='{"rollno":'+rollno+'}';
    return this.http.post("http://localhost:8080/profile",this.params,{
              headers:new HttpHeaders({
        'Content-Type':'application/json'
      
      })
      });
  }
  setExamid(id)
  {
    this.exam_id=id;
  }
  getExamid()
  {
   return this.exam_id;
  }
}
