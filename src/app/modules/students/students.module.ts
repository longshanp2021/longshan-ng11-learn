import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { StudentService } from './services/student.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    StudentListComponent,
    HomeComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzInputNumberModule,
    ReactiveFormsModule,
    NzIconModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
