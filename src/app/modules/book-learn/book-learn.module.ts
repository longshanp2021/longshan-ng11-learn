import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BookLearnRoutingModule } from './book-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookLearnRoutingModule,
    NzTableModule
  ]
})
export class BookLearnModule { }
