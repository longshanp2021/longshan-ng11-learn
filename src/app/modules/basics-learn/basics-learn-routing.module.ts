import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { AttributeBindingComponent } from "./components/attribute-binding/attribute-binding.component";
import { InterpolationLearnComponent } from "./components/interpolation-learn/interpolation-learn.component";
import { TemplateStatementComponent } from './components/template-statement/template-statement.component';
import { TemplateReferenceComponent } from "./components/template-reference/template-reference.component";
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'event-bingding',
    component: EventBindingComponent
  },
  {
    path: 'attribute-bingding',
    component: AttributeBindingComponent
  },
  {
    path: 'interpolation-learn',
    component: InterpolationLearnComponent
  },
  {
    path: 'template-statemen',
    component: TemplateStatementComponent
  },
  {
    path:'template-reference',
    component:TemplateReferenceComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsLearnRoutingModule { }
