import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars-list',
    component: CarsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
