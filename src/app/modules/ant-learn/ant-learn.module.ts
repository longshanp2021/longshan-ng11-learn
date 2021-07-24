import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntLearnRoutingModule } from './ant-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ModalLearnComponent } from './components/modal-learn/modal-learn.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalChildLearnComponent } from './components/modal-child-learn/modal-child-learn.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [HomeComponent, ModalLearnComponent, ModalChildLearnComponent],
  imports: [
    CommonModule,
    AntLearnRoutingModule,
    NzButtonModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule
  ]
})
export class AntLearnModule { }
