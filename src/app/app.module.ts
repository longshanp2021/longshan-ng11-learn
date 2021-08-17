import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableLearnComponent } from './components/table-learn/table-learn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './components/home/news/news.component';
import { ChildComponent } from './components/child/child.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { OrderComponent } from './components/order/order.component';
import { HighlightDirective } from './highlight.directive';
import { TrainingComponent } from './components/training/training.component';
import { StorageService } from "./services/storage.service";
import { HttpClientModule } from '@angular/common/http';
import { FruitsService } from './modules//fruits/services/fruits.service';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BookService } from './modules/book-learn/service/book.service';

registerLocaleData(en);


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TableLearnComponent,
        NewsComponent,
        ChildComponent,
        CommunicationComponent,
        OrderComponent,
        HighlightDirective,
        TrainingComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NzMenuModule
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        StorageService,
        FruitsService,
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
