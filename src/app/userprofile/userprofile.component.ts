import { Component, OnInit } from '@angular/core';
import {LoginService} from'../login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  rollno;
  password;
  usertype;
  constructor(private service:LoginService) { }

  ngOnInit(): void {

    this.rollno = this.service.rollno;
    this.password = this.service.password;
    this.usertype = this.service.user_type;
  }

}
