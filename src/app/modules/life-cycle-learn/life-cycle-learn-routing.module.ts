import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../../modules/life-cycle-learn/home/home.component";
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleLearnRoutingModule { }
