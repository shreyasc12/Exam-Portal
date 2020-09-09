import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-myexams',
  templateUrl: './myexams.component.html',
  styleUrls: ['./myexams.component.css']
})
export class MyexamsComponent implements OnInit {

  rollno;
  examsdata=[];
  markslist=[];
  constructor(private service:LoginService,private examservice:ExamService) { }

  ngOnInit(): void {
    this.rollno = this.service.getRollno();
    console.log(this.rollno);
    this.examservice.getmyInfo(this.rollno).subscribe((data)=>{
      this.examsdata = Array.from(Object.keys(data),k=>data[k]);
      //console.log(this.examsdata);
      this.markslist = this.examsdata[0].marks;
      console.log(this.markslist);
    });
  }

}
