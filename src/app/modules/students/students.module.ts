import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { StudentService } from './services/student.service';


@NgModule({
  declarations: [
    StudentListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  providers:[
    StudentService
  ]
})
export class StudentsModule { }
