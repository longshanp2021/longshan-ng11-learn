import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-form-learn',
  templateUrl: './form-learn.component.html',
  styleUrls: ['./form-learn.component.scss']
})
export class FormLearnComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [undefined, [Validators.required]],
      age: [undefined, [Validators.required]]
    })
  }

  public ngOnInit(): void {
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}
