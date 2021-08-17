import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  public form = new FormGroup({
    name1: new FormControl(''),
    name2: new FormControl(''),
  })

  constructor() { }

  public ngOnInit(): void {
    this.onSubmit();
  }

  public onSubmit() {
    console.warn(this.form.value);

  }

}
