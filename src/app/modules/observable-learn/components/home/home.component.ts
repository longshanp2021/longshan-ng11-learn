import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = '我是小明';
  public arr: Array<string> = [];
  public data = new Subject();
  public data2 = new Observable();
  public xiaomingSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data2);
  }

  public publishMessage() { }

  public obtain() {
    this.data.next(this.title);
  }

  xiaomingSubscript() {
    if (this.xiaomingSubscription) {
      console.log('小明已经订阅过了,不需要再订阅了');
      return
    }
    this.xiaomingSubscription = this.data.subscribe(ms => { this.xiaomingReceiveTitle(ms) });
  }

  xiaomingUnsubscript() {
    this.xiaomingSubscription.unsubscribe();
    this.xiaomingSubscription = null;
  }

  xiaomingReceiveTitle(ms) {
    console.log(`消息为:${ms}`);

  }
}
