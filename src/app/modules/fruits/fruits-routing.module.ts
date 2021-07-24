import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fruits-list', component: FruitsListComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
