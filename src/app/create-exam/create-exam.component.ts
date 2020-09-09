import { Component, OnInit } from '@angular/core';
import {ExamService} from '../exam.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  examid;
  name;
  constructor(private service:ExamService,private router: Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(data)
  {
    this.name = data.examname;
    this.examid = data.examid;
    this.service.setExamid(this.examid);
   console.log(this.name+" " + this.examid);
    this.service.createexamhttp(this.examid,'"'+this.name+'"').subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/questions']);

    });
  }

}
