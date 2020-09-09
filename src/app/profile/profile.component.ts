import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public studentdata=[];
  rollno;
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.gethttpData().subscribe((data)=>{
      this.studentdata = Array.from(Object.keys(data),k=>data[k]);
      console.log(this.studentdata);
    });
  }

}
