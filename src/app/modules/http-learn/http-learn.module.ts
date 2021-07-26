import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpLearnRoutingModule } from './http-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BroadcastComponent } from "./components/broadcast/broadcast.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    BroadcastComponent
  ],
  imports: [
    CommonModule,
    HttpLearnRoutingModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class HttpLearnModule { }
