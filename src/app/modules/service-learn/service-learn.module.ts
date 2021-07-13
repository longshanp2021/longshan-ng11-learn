import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceLearnRoutingModule } from './service-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    HomeComponent,
    CalculatorComponent,
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    CommonModule,
    ServiceLearnRoutingModule
  ],
  providers:[
    MessageService
  ]
})
export class ServiceLearnModule { }
