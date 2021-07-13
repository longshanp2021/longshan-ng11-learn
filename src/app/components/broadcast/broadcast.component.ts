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
  public message: string = '开心就好';
  // 订阅消息的凭证
  private xiaomingMessageSubscription: Subscription;
  private leleMessageSubscription: Subscription;
  public constructor() { }

  public ngOnInit(): void {
  }

  public publishMessage() {
    // 往这个主题里面发布内容
    // 这个是发消息
    this.messageSubject.next(this.message);
  }

  /**
   * 小明开始订阅消息
   */
  public xiaomingSubscribe() {
    if (this.xiaomingMessageSubscription) {
      console.log('小明已经订阅了,不需要再重复订阅!');
      return;
    }
    // 开始订阅,就可以接收消息
    // subscribe里面放一个箭头函数
    // this.xiaomingMessageSubscription = this.messageSubject
    // .subscribe(ms => this.xiaomingRecieveMessage(ms + new Date().toTimeString()));
    this.xiaomingMessageSubscription = this.messageSubject
      .pipe(map(ms => ms + new Date().toTimeString()))
      .pipe()
      .subscribe(ms => this.xiaomingRecieveMessage(ms));
  }

  /**
   * 小明取消订阅消息
   */
  public xiaomingUnSubscribe() {
    this.xiaomingMessageSubscription.unsubscribe();
    this.xiaomingMessageSubscription = null;
  }

  /**
   * 小明收到消息后的处理函数
   * @param ms 消息内容
   */
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
