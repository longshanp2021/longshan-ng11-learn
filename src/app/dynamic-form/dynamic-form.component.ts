import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: [undefined, [Validators.required, Validators.minLength(3)]],
      age: [undefined]
    });
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.studentInfo.controls;
  }

  public ngOnInit(): void {
    // let s1 = { name: 'robot', age: 0 };
    // this.studentInfo.patchValue(s1);
  }

  public save() {
    // let stu = this.studentInfo.value;
    // console.log(stu);
    console.log(1, this.formControls['name']);
    // console.log(2, this.studentInfo.valid);

  }

}
