import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Logger {
  title: string = 'home';
  ngOnChanges() {
    console.log(`${this.title},ngOnChanges`);

  };
  ngOnInit() {
    console.log(`${this.title},ngOnInit`);
  };
  ngDoCheck() {
    console.log(`${this.title},ngDoCheck`);
  };
  ngAfterContentInit() {
    console.log(`${this.title},ngAfterContentInit`);
  };
  ngAfterContentChecked() {
    console.log(`${this.title},ngAfterContentChecked`);
  };
  ngAfterViewInit() {
    console.log(`${this.title},ngAfterViewInit`);
  };
  ngAfterViewChecked() {
    console.log(`${this.title},ngAfterViewChecked`);
  };
  ngOnDestroy() {
    console.log(`${this.title},ngOnDestroy`);
  };



}
