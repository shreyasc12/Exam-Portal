import { Component } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ExamPortal';
  temp;
  user;
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {

    //this.loginservice.getFlag().subscribe(id => this.temp = id);
    this.user = this.loginservice.getUser();
    this.temp = this.loginservice.flag;
    console.log(this.user);
  }
}
