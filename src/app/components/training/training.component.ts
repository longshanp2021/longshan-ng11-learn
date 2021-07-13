import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from "rxjs";
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  public message: string = '我是一个信息';
  private xiaomingMessageSubscription: Subscription;
  public messageSubscription = new Subject<string>();
  public constructor() { }
  public ngOnInit(): void {
  }
  //广播发送消息
  publishMessage() {
    this.messageSubscription.next(this.message)
  }
  //小明接收到的消息订阅
  xiaomingMessageReceive(ms: string) {
    console.log(`小明已经接收到消息,消息为:${ms}`);
  }
  //小明订阅消息
  xiaomingSuncription() {
    if (this.xiaomingMessageSubscription) {
      return
    }
    this.xiaomingMessageSubscription = this.messageSubscription.subscribe(ms => this.xiaomingMessageReceive(ms))
  }
  // 小明取消订阅消息
  xiaomingUnSuncription() {
    this.xiaomingMessageSubscription.unsubscribe();
    this.xiaomingMessageSubscription = null;
  }
}
