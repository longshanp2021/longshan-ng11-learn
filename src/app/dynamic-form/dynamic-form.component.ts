import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  public studentInfo: FormGroup;
  public constructor(
    private fb: FormBuilder
  ) {
    this.studentInfo = this.fb.group({
      name: [],
      age: []
    });
  }

  public ngOnInit(): void {
    let s1 = { name: 'robot', age: 0 };
    this.studentInfo.patchValue(s1);
  }

  public save() {
    let stu = this.studentInfo.value;
    console.log(stu);
  }

}
