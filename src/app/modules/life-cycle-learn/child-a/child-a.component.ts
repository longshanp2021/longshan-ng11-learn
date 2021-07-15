import { Component, OnInit } from '@angular/core';
import { Logger } from "../../../logger";
@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent extends Logger {
  title: string = 'childA';
  ngOnChanges() {
    console.log(`1${this.title},ngOnChanges`);

  };
  ngOnInit() {
    console.log(`2${this.title},ngOnInit`);
  };
  ngDoCheck() {
    console.log(`3${this.title},ngDoCheck`);
  };
  ngAfterContentInit() {
    console.log(`4${this.title},ngAfterContentInit`);
  };
  ngAfterContentChecked() {
    console.log(`5${this.title},ngAfterContentChecked`);
  };
  ngAfterViewInit() {
    console.log(`6${this.title},ngAfterViewInit`);
  };
  ngAfterViewChecked() {
    console.log(`7${this.title},ngAfterViewChecked`);
  };
  ngOnDestroy() {
    console.log(`8${this.title},ngOnDestroy`);
  };

}
