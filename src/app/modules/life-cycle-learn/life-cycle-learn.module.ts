import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleLearnRoutingModule } from './life-cycle-learn-routing.module';
import { HomeComponent } from './home/home.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildAAComponent } from './child-aa/child-aa.component';
import { ChildBBComponent } from './child-bb/child-bb.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChildAComponent,
    ChildBComponent,
    ChildAAComponent,
    ChildBBComponent
  ],
  imports: [
    CommonModule,
    LifeCycleLearnRoutingModule
  ]
})
export class LifeCycleLearnModule { }
