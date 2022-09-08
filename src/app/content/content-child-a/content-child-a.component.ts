import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { ContentChildBComponent } from '../content-child-b/content-child-b.component';

@Component({
  selector: 'app-content-child-a',
  templateUrl: './content-child-a.component.html',
  styleUrls: ['./content-child-a.component.scss'],
})
export class ContentChildAComponent implements OnInit, AfterContentInit {
  @ContentChild(ContentChildBComponent) contentB: ContentChildBComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(888);
    console.log(this.contentB.fun());
  }
}
