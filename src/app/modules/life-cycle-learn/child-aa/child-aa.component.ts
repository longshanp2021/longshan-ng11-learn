import { Component, OnInit } from '@angular/core';
import { Logger } from "../../../logger";
@Component({
  selector: 'app-child-aa',
  templateUrl: './child-aa.component.html',
  styleUrls: ['./child-aa.component.scss']
})
export class ChildAAComponent extends Logger {

  title: string = 'childAA';
  ngOnChanges() {
    console.log(`${this.title},ngOnChanges`);

  };
  ngOnInit() {
    console.log(`${this.title},ngOnInit`);
  };
  ngDoCheck() {
    // console.log(`${this.title},ngDoCheck`);
  };
  ngAfterContentInit() {
    console.log(`${this.title},ngAfterContentInit`);
  };
  ngAfterContentChecked() {
    // console.log(`${this.title},ngAfterContentChecked`);
  };
  ngAfterViewInit() {
    console.log(`${this.title},ngAfterViewInit`);
  };
  ngAfterViewChecked() {
    // console.log(`${this.title},ngAfterViewChecked`);
  };
  ngOnDestroy() {
    console.log(`${this.title},ngOnDestroy`);
  };


}
