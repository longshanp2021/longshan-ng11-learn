import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { BasicsLearnRoutingModule } from './basics-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { InterpolationLearnComponent } from './components/interpolation-learn/interpolation-learn.component';
import { TemplateStatementComponent } from './components/template-statement/template-statement.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
@NgModule({
  declarations: [
    HomeComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    InterpolationLearnComponent,
    TemplateStatementComponent,
    TemplateReferenceComponent
  ],
  imports: [
    CommonModule,
    BasicsLearnRoutingModule
  ]
})
export class BasicsLearnModule { }
