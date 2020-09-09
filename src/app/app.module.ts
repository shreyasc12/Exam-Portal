import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './registration.service';
import {LoginService} from './login.service';
import {ExamService} from './exam.service';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import { ExamComponent } from './exam/exam.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { QuestionsComponent } from './questions/questions.component';
import { MyexamsComponent } from './myexams/myexams.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EnablestudentsComponent } from './enablestudents/enablestudents.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ExamComponent,
    QuestionsComponent,
    MyexamsComponent,
    AdminProfileComponent,
    EnablestudentsComponent,
    CreateExamComponent,
    AddquestionComponent,
    HomeComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [RegistrationService,LoginService,ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
