import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesRoutingModule } from './phones-routing.module';
import { PhoneService } from './services/phone.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PhoneEditComponent } from "../phones/components/phone-edit/phone-edit.component";
import { HomeComponent } from '../phones/components/home/home.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [
    HomeComponent,
    PhoneEditComponent,
    PhoneListComponent

  ],
  imports: [
    CommonModule,
    PhonesRoutingModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule
  ],
  providers: [
    PhoneService
  ]
})
export class PhonesModule { }
