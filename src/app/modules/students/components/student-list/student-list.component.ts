import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/i-student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students: Array<IStudent>;
  public constructor(
    public studentSrv: StudentService
  ) { }

  public ngOnInit(): void {
    this.queryStudent();
  }

  public queryStudent() {
    this.studentSrv.query().subscribe(students => {
      this.students = students;
    });
  }

}
