import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IStudent } from '../../models/i-student';
import { StudentService } from '../../services/student.service';
import { StudentEditComponent } from "../student-edit/student-edit.component";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  public arr: Array<object> = [];
  public id: number = 0;
  public editFormVisible: boolean;
  public students: Array<IStudent>;
  public form: FormGroup;
  @ViewChild(StudentEditComponent)
  private editForm: StudentEditComponent;


  public constructor(
    private studentSrv: StudentService,
    private modalService: NzModalService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({

      name: [],
      age: [],
      // remark: [],
    })
  }

  public ngOnInit(): void {
    this.queryStudent();
  }

  public addStudent(): void {
    this.editFormVisible = !this.editFormVisible;
    this.editForm.form.reset()
  }

  public queryStudent(): void {
    this.studentSrv.query().subscribe(students => {
      this.students = students;
    });
  }

  public closeEditFormModal(): void {
    this.editFormVisible = false;
  }

  public saveStudent(): void {
    this.editFormVisible = false;
    if (this.editForm.form.value.id) {
      this.studentSrv.patch(this.editForm.form.value.id, this.editForm.form.value).subscribe(() => { this.queryStudent() })
    } else {
      this.studentSrv.create(this.editForm.form.value).subscribe(student => {
        this.queryStudent();
      });
    }
  }

  resetStudent(): void {
    this.form.reset();
  }

  public findStudent(): void {
  }

  public deleteStudent(id: any) {
    this.modalService.confirm({
      nzTitle: '删除',
      nzCancelText: '取消',
      nzContent: '确定删除吗?',
      nzOkText: '确定',
      nzOnOk: () => {
        this.studentSrv.delete(id).subscribe((rel) => {
          this.queryStudent();
        });
      }
    });
  }

  public editStudent(e) {
    this.editFormVisible = !this.editFormVisible;
    this.editForm.form.patchValue(e);
    // console.log(this.editForm);

  }

}
