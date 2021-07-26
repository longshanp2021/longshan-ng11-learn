import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { BroadcastComponent } from "./components/broadcast/broadcast.component";
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'broadcast',
    component: BroadcastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpLearnRoutingModule { }
