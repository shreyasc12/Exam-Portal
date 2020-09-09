import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-enablestudents',
  templateUrl: './enablestudents.component.html',
  styleUrls: ['./enablestudents.component.css']
})

export class EnablestudentsComponent implements OnInit {

  public studentsdata=[];
  public enabledStudents=[];
  public NewRequests=[];
  constructor(private service:StudentService) {
    
   }

  ngOnInit(): void {
    this.service.getallStudents().subscribe((data)=>{
      this.studentsdata = Array.from(Object.keys(data),k=>data[k]);
      console.log(this.studentsdata);
     for (let entry of this.studentsdata) {
      if(entry.status==0)
      {
        // {rollno: 10, name: "Sukhad"
        this.NewRequests.push({"name":''+entry.name,"rollno":+entry.rollno});
      }
      else
      {
        this.enabledStudents.push(entry.name);
      }
    }
    console.log(this.enabledStudents);
  });
  }
  showQues(event)
  {
    let target = event.target || event.srcElement || event.currentTarget;  
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    console.log(id);
    this.service.enablehttpData(id).subscribe((data)=>{
      console.log(data);
      this.NewRequests.pop();
    });

    // this.service.setExamid(id);
    // this.router.navigate(['/questions']);
  }
}
