import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamService } from './exam.service';
import { ExamComponent } from './exam/exam.component';
import { QuestionsComponent } from './questions/questions.component';
import { MyexamsComponent } from './myexams/myexams.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EnablestudentsComponent } from './enablestudents/enablestudents.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
 
  {path:"login", component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"profile", component:ProfileComponent},
  {path:"exam", component:ExamComponent},
  {path:"questions", component:QuestionsComponent},
  {path:"Myexams", component:MyexamsComponent},
  {path:"adminprofile", component:AdminProfileComponent},
  {path:"enablestudents", component:EnablestudentsComponent},
  {path:"createExam", component:CreateExamComponent},
  {path:"addquestion",component:AddquestionComponent},
  {path:"home",component:HomeComponent},
  {path:"userprofile",component:UserprofileComponent},

  
  
  
  {path:"*",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
