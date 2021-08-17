import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableLearnRoutingModule } from './observable-learn-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { TakeSkipTapLearnComponent } from './components/take-skip-tap-learn/take-skip-tap-learn.component';
import { ChildComponent } from './components/child/child.component';
import { FormLearnComponent } from './components/form-learn/form-learn.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';


@NgModule({
  declarations: [HomeComponent, TakeSkipTapLearnComponent, ChildComponent, FormLearnComponent, NameEditorComponent],
  imports: [
    CommonModule,
    ObservableLearnRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ObservableLearnModule { }
