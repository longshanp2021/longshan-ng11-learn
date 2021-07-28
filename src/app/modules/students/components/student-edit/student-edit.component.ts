import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  public form: FormGroup;
  public constructor(
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [],
      age: [],
      id: [],
    });
  }

  public ngOnInit(): void {
  }

  public submitForm(): void {

  }

}
