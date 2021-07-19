import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FruitsEditComponent } from './components/fruits-edit/fruits-edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    FruitsListComponent,
    FruitsEditComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzInputNumberModule,
    ReactiveFormsModule,
  ]
})
export class FruitsModule { }
