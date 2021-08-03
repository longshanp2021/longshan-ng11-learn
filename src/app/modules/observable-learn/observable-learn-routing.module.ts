import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TakeSkipTapLearnComponent } from './components/take-skip-tap-learn/take-skip-tap-learn.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'take-skip-tap-learn',
    component: TakeSkipTapLearnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableLearnRoutingModule { }
