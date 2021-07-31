import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableLearnRoutingModule } from './observable-learn-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ObservableLearnRoutingModule
  ]
})
export class ObservableLearnModule { }
