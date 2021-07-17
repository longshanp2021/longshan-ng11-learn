import { Component, OnInit, AfterViewInit, AfterViewChecked ,ViewChild} from '@angular/core';
import { ChildComponent } from "./child/child.component";
@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.scss']
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  private prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildComponent) viewChild: ChildComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
  console.log('AfterViewInit');
 
  }
  

  ngAfterViewChecked() {
  
}
}