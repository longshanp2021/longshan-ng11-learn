import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormLearnRoutingModule } from './form-learn-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TemplateAndReactiveFormComponent } from "./components/template-and-reactive-form/template-and-reactive-form.component";
@NgModule({
  declarations: [
    HomeComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    TemplateAndReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    FormLearnRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormLearnModule { }
