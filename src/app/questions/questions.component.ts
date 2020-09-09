import { Component, OnInit } from '@angular/core';
import {ExamService} from '../exam.service';
import { ExamComponent } from '../exam/exam.component';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public Questionsdata=[];
  public QuestionList=[];
  id;
  user;
  option_selected;
  answers=[];
  click : boolean = false;
  constructor(private service: ExamService,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.user = this.loginservice.getUser();
    this.id = this.service.getExamid();
    this.service.getQuesData(this.id).subscribe((data)=>{
      this.Questionsdata = Array.from(Object.keys(data),k=>data[k]);
      //console.log(this.examsdata);
   
    // console.log("*****ID IS***:  " + this.id);
    // console.log(this.Questionsdata);
    console.log(this.Questionsdata[0].questions);
    this.QuestionList = this.Questionsdata[0].questions;
  });
  }
  ansclick(event)
  {
    let target = event.target || event.srcElement || event.currentTarget;  
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    this.option_selected = id;
    console.log(id);
    //this.service.setExamid(id);
    //this.router.navigate(['/questions']);
  }
  onFormSubmit()
  {
    this.answers.push('"'+this.option_selected+'"');
    //console.log(this.answers);
  }
  onExamSubmit()
  {
    //console.log(this.id+" Rollno - "+this.loginservice.rollno);
    this.service.submitexam(this.id,this.loginservice.rollno,this.answers).subscribe((data)=>{
     console.log(data);
      // this.myservice.setRollno(this.rollno);
      //  this.router.navigate(['/exams']);

  });
  }
}
