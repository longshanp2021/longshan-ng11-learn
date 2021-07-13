import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateAndReactiveFormComponent } from './components/template-and-reactive-form/template-and-reactive-form.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'form-template', component: FormTemplateComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  {
    path: 'template-and-reactive-form', component: TemplateAndReactiveFormComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormLearnRoutingModule { }
