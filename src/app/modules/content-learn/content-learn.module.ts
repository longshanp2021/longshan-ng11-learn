import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLearnRoutingModule } from './content-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { MyCardComponent } from './components/my-card/my-card.component';


@NgModule({
  declarations: [HomeComponent, ContentComponent, MyCardComponent],
  imports: [
    CommonModule,
    ContentLearnRoutingModule
  ]
})
export class ContentLearnModule { }
