import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  public name: string;
  public age: number;
  public constructor() { }

  public ngOnInit(): void {
  }

  public save(): void {
    console.log(this.name, this.age);
  }

}
