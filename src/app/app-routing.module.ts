import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroadcastComponent } from './components/broadcast/broadcast.component';
import { ChildComponent } from './components/child/child.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { TableLearnComponent } from './components/table-learn/table-learn.component';
import { TrainingComponent } from './components/training/training.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'table-learn', component: TableLearnComponent },
    { path: 'hero-form', component: HeroFormComponent },
    { path: 'hero', component: HomeComponent },
    { path: 'communication', component: CommunicationComponent },
    { path: 'order', component: OrderComponent },
    { path: 'broadcast', component: BroadcastComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'child', component: ChildComponent },
    { path: 'service-learn', loadChildren: () => import('./modules/service-learn/service-learn.module').then(m => m.ServiceLearnModule) },
    { path: 'form-learn', loadChildren: () => import('./modules/form-learn/form-learn.module').then(m => m.FormLearnModule) },
    { path: 'basics-learn', loadChildren: () => import('./modules/basics-learn/basics-learn.module').then(m => m.BasicsLearnModule) },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }