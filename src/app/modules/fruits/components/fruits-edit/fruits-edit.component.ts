import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-fruits-edit',
  templateUrl: './fruits-edit.component.html',
  styleUrls: ['./fruits-edit.component.scss']
})
export class FruitsEditComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      id: [],
      name: []
    })
  }
  submitForm():void {

  }

  ngOnInit(): void {
  }

}
