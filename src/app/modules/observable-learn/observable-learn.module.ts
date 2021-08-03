import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableLearnRoutingModule } from './observable-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TakeSkipTapLearnComponent } from './components/take-skip-tap-learn/take-skip-tap-learn.component';


@NgModule({
  declarations: [HomeComponent, TakeSkipTapLearnComponent],
  imports: [
    CommonModule,
    ObservableLearnRoutingModule
  ]
})
export class ObservableLearnModule { }
