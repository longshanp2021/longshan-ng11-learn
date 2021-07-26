import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsEditComponent } from './components/cars-edit/cars-edit.component';
import { CarsService } from './components/service/cars.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@NgModule({
  declarations: [HomeComponent, CarsListComponent, CarsEditComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzModalModule,
    NzFormModule,
    NzIconModule,
    NzInputNumberModule,
    NzPaginationModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
