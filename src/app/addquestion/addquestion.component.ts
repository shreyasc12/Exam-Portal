import { Component, OnInit } from '@angular/core';
import {ExamService} from '../exam.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  question_name;
  option1;
  option2;
  option3;
  correctanswer;
  marks;
  examid;
  constructor(private service:ExamService) { }

  ngOnInit(): void {
    this.examid = this.service.getExamid();
  }
  onFormSubmit(data)
  {
    this.question_name = data.question;
    this.option1 = data.option1;
    this.option2 = data.option2;
    this.option3 = data.option3;
    this.correctanswer = data.correctanswer;
    this.marks = data.marks;
    alert(this.question_name + "  "+ this.option1+"  "+ this.option2+"  "+this.option3 +" "+this.correctanswer);
    this.service.submitquestion(this.examid,'"'+this.question_name+'"','"'+this.option1+'"','"'+this.option2+'"','"'+this.option3+'"','"'+this.correctanswer+'"',this.marks).subscribe((data)=>{
      console.log(data);
    });
  }

}
