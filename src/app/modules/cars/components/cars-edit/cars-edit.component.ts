import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.scss']
})
export class CarsEditComponent implements OnInit {
  public form: FormGroup;
  public name: string;
  public age: number;
  public constructor(private fb: FormBuilder) {
    this.form = fb.group({
      id: [],
      name: [],
      age: []
    })
  }

  public ngOnInit(): void {
  }

  public submitForm(): void {
  }
}
