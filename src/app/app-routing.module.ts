import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InterpolationLearnComponent } from './components/interpolation-learn/interpolation-learn.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'interpolation-learn', component: InterpolationLearnComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
