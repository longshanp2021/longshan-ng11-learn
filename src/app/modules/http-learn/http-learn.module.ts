import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpLearnRoutingModule } from './http-learn-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpLearnRoutingModule,
    NzButtonModule
  ]
})
export class HttpLearnModule { }
