import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableLearnComponent } from './components/table-learn/table-learn.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './components/home/news/news.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { OrderComponent } from './components/order/order.component';
import { HighlightDirective } from './highlight.directive';
import { BroadcastComponent } from './components/broadcast/broadcast.component';
import { TrainingComponent } from './components/training/training.component';
import { StorageService } from "./services/storage.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TableLearnComponent,
        HeroComponent,
        HeroFormComponent,
        NewsComponent,
        ParentComponent,
        ChildComponent,
        CommunicationComponent,
        OrderComponent,
        HighlightDirective,
        BroadcastComponent,
        TrainingComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
