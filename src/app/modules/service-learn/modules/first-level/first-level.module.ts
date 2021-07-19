import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondLevelModule } from '../second-level/second-level.module';
import { FirstLevelComponent } from './first-level/first-level.component';
import { MyCalculatorService } from '../../services/my-calculator.service';


@NgModule({
  declarations: [FirstLevelComponent],
  imports: [
    CommonModule,
    SecondLevelModule
  ],
  // providers: [
  //   MyCalculatorService
  // ],
  exports: [
    FirstLevelComponent
  ]
})
export class FirstLevelModule { }
