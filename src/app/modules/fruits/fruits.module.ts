import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    FruitsListComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
