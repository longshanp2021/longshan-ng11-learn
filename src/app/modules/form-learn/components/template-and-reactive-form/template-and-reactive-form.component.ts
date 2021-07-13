import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-template-and-reactive-form',
  templateUrl: './template-and-reactive-form.component.html',
  styleUrls: ['./template-and-reactive-form.component.scss']
})
export class TemplateAndReactiveFormComponent implements OnInit {
  title: string;
  ngModel: string;
  sonInfo: FormGroup;
  constructor(fb: FormBuilder) {
    this.sonInfo = fb.group({
      name: [undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]]
    })
  }
  get fcs(): { [key: string]: AbstractControl } {
    return this.sonInfo.controls;
  }


  change(e) {
    console.log(e);

  }
  ngOnInit(): void {
  }

}
