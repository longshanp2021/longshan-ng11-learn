import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondLevelComponent } from './second-level/second-level.component';
import { MyCalculatorService } from '../../services/my-calculator.service';
import { SecondLevelCopyComponent } from './second-level-copy/second-level-copy.component';


@NgModule({
  declarations: [SecondLevelComponent, SecondLevelCopyComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MyCalculatorService
  ],
  exports: [
    SecondLevelComponent,
    SecondLevelCopyComponent
  ]
})
export class SecondLevelModule { }
