import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicControlComponent,
    TemplateFormComponent,
    TemplateBasicComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
