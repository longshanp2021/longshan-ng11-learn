import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent{
  personInfo: FormGroup;
  public constructor(
  public fb: FormBuilder) {
    this.personInfo = this.fb.group({
      name: [undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
    });
  }
  get formControls(): { [key: string]: AbstractControl } {
    return this.personInfo.controls;
  }

}
