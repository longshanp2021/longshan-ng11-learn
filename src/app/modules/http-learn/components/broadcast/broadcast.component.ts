import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  // 消息主题,格式是string
  public messageSubject = new Subject<string>();
  public message: string;
  // 订阅消息的凭证
  private xiaomingMessageSubscription: Subscription;
  private leleMessageSubscription: Subscription;
  public constructor() { }

  public ngOnInit(): void {}

  public publishMessage() {
    this.messageSubject.next(this.message);
  }

  public xiaomingSubscribe() {
    if (this.xiaomingMessageSubscription) {
      console.log('小明已经订阅了,不需要再重复订阅!');
      return;
    }
    this.xiaomingMessageSubscription = this.messageSubject
      .pipe(map(ms => ms + new Date().toTimeString()))
      .pipe()
      .subscribe(ms => this.xiaomingRecieveMessage(ms));
  }

  public xiaomingUnSubscribe() {
    this.xiaomingMessageSubscription.unsubscribe();
    this.xiaomingMessageSubscription = null;
  }

  public xiaomingRecieveMessage(ms: string) {
    console.log(`小明收到消息,内容为:${ms}`);
  }


  public leleRecieveMessage(ms: string) {
    console.log(`乐乐收到消息,内容为:${ms}`);
  }

  public leleSubscribe() {
    if (this.leleMessageSubscription) {
      console.log('乐乐已经订阅了,不需要再订阅了');
      return
    }
    this.leleMessageSubscription = this.messageSubject.subscribe(ms => this.leleRecieveMessage(ms));
  }

  public leleUnSubscribe() {
    this.leleMessageSubscription.unsubscribe();
    this.leleMessageSubscription = null;
  }
}
