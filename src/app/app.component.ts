import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  //   age = 1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      counter: [5],
    });
  }

  public ngOnInit(): void {}

  //   public valueChange(name: string) {
  //     console.log('name change:', name);
  //   }

  dataChange(data: any) {
    if (data && data.age) {
      //   this.age = data.age;
    }
    console.log(data);
  }

  //   public areaChange(val: any) {
  //     console.log('area cccc:', val);
  //   }
}
