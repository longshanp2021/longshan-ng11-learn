import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  personInfo: FormGroup;
  get formControls(): { [key: string]: AbstractControl } {
    return this.personInfo.controls;
  }
  public constructor(
    public fb: FormBuilder) {
    this.personInfo = this.fb.group({
      name: [undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      age: [undefined, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.personInfo.valueChanges
      .pipe(debounceTime(200))
      .subscribe(ms => console.log(ms));
  }
  public getPatchValue() {
    // this.personInfo.patchValue({ name: '小明', age: 12 })

  }

}
