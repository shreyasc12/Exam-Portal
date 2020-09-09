import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  rollno:number;
  name:string;
  password:string;
  email:string;
  constructor(private myservice:RegistrationService) { }

  ngOnInit(): void {
   
  }
  onFormSubmit(data)
  {
    this.name = data.name;
    this.rollno = data.rollno;
    this.password = data.password;
    this.email = data.email;
    //alert(this.name + "  "+ this.rollno+"  "+ this.password+"  "+this.email);
    this.myservice.posthttpData(this.rollno,'"'+this.name+'"','"'+this.password+'"').subscribe((data)=>{
      console.log(data);
    });
  }
  namevalidator()
  {
    return true;
  }

}
