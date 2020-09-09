import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rollno:number;
  password:string;
  user_type;
  constructor(private myservice:LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(data)
  {
    alert(data.rollno+"  "+ data.password)
    this.rollno = data.rollno;
    this.password = data.password;
    this.user_type = data.test;
    this.myservice.setpassword(this.password);
    //alert(this.rollno + "  " + this.password);
    this.myservice.setUser(this.user_type);
    if(this.user_type=="student")
    {
    this.myservice.posthttpData(this.rollno,'"'+this.password+'"').subscribe((data)=>{
      console.log(data);
      this.myservice.setRollno(this.rollno);
      this.router.navigate(['/profile']);

    });
  }
  else{
    this.router.navigate(['/adminprofile']);
  }
  }

}
