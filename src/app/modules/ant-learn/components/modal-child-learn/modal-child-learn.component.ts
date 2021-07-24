import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-modal-child-learn',
  templateUrl: './modal-child-learn.component.html',
  styleUrls: ['./modal-child-learn.component.scss']
})
export class ModalChildLearnComponent implements OnInit {
  @Input()
  public name: string;
  @Input()
  public password: any;
  validateForm!: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder) { }
  add(e: any, r: any) {
    this.name = e;
    this.password = r;
    // console.log(this.name);
    // console.log(this.password);


  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
