import { Component, OnInit } from '@angular/core';
import {ExamService} from '../exam.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  public examsdata=[];
  
  //examName=examsdata[0]; 

  constructor(private service: ExamService,private router: Router) { }

  ngOnInit(): void {
    this.service.gethttpData().subscribe((data)=>{
      this.examsdata = Array.from(Object.keys(data),k=>data[k]);
      //console.log(this.examsdata);
      console.log(this.examsdata[0].exam_name);
    });
  }
  showQues(event)
  {
    let target = event.target || event.srcElement || event.currentTarget;  
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    console.log(id);
    this.service.setExamid(id);
    this.router.navigate(['/questions']);
  }

}
