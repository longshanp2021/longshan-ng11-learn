import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from "rxjs";
import { map, first, take } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public TITLE: string = 'lisa';
  public item: string = '';
  public arr: Array<string> = ['小明', '乐乐', '小黑', '大明'];
  public msg: string = '大家好';
  public data = new Subject();
  // public data2 = new Subject();
  public xiaomingSubscription: Subscription;
  constructor() { }

  public ngOnInit(): void {
    console.log(this.data);
    // console.log(this.data2);
  }

  public publishMessage() { }

  public release() {
    this.data.next(this.arr);
  }

  public xiaomingSubscript() {
    if (this.xiaomingSubscription) {
      console.log('小明已经订阅过了,不需要再订阅了');
      return
    }
    this.xiaomingSubscription = this.data.pipe(map(ms => {
      return ms + new Date().toTimeString();
    })).pipe(take(2)).subscribe(ms => { this.xiaomingReceiveTitle(ms) });
    // this.data2.subscribe((m) => { this.xiaomingReceiveTitle(m) })
  }

  public xiaomingUnsubscript() {
    this.xiaomingSubscription.unsubscribe();
    this.xiaomingSubscription = null;
  }

  public xiaomingReceiveTitle(s) {
    console.log(`消息为:${s}`);
  }

  addItem(newItem: string) {
    this.item = newItem;
  }

}
