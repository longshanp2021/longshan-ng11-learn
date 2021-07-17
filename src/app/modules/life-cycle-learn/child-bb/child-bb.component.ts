import { Component, OnInit } from '@angular/core';
import { Logger } from "../../../logger";
@Component({
  selector: 'app-child-bb',
  templateUrl: './child-bb.component.html',
  styleUrls: ['./child-bb.component.scss']
})
export class ChildBBComponent extends Logger {

  title: string = 'childBB';
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
