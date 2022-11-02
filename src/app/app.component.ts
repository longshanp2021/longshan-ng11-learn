import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  dataChange(data: any) {
    console.log('data', data);
  }

  areaChange(data: any) {
    console.log('data', data);
  }
}
