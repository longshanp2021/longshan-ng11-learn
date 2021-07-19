import { Component, OnInit, ViewChild } from '@angular/core';
import { IStudent } from '../../models/i-student';
import { StudentService } from '../../services/student.service';
import { StudentEditComponent } from "../student-edit/student-edit.component";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  arr: Array<object> = [];
  id: number = 0;
  name: string;
  age: number;
  remark: string;
  public editFormVisible: boolean;
  public students: Array<IStudent>;
  @ViewChild(StudentEditComponent)
  private editForm: StudentEditComponent;
  public constructor(
    public studentSrv: StudentService
  ) { }
  public ngOnInit(): void {
    this.queryStudent();
  }
  public addStudent() {
    this.editFormVisible = !this.editFormVisible;
  }
  public queryStudent() {
    this.studentSrv.query().subscribe(students => {
      this.students = students;
    });
  }
  public closeEditFormModal() {
    this.editFormVisible = false;
  }
  public saveStudent(): void {
    this.studentSrv.create(this.editForm.form.value).subscribe(student => {
      this.queryStudent();
    });
    this.editFormVisible = false;
  }

}
