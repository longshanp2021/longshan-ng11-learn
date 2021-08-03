import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, BehaviorSubject, ReplaySubject } from "rxjs";
import { map, skip, take, tap } from "rxjs/operators";
@Component({
  selector: 'app-take-skip-tap-learn',
  templateUrl: './take-skip-tap-learn.component.html',
  styleUrls: ['./take-skip-tap-learn.component.scss']
})
export class TakeSkipTapLearnComponent implements OnInit {
  public title: string = '天天向上';
  public subject: Subject<any> = new Subject();
  public sub: Subscription;
  public bhvSubject: BehaviorSubject<any> = new BehaviorSubject('好好学习');//
  constructor() { }

  public ngOnInit(): void {
    // this.publish();
    // this.subscript();
    console.log(this.bhvSubject.value);
  }


  public publish() {
    this.bhvSubject.next(this.title);

  };

  public send() {
    for (let i = 0; i < 10; i++) {
      this.publish();
    }
  };

  public receiveTitle(m) {
    console.log(`已经收到信息,信息为:${m}`);
  }

  public subscript() {
    // this.subject.pipe(take(2)).pipe(map(m => m + new Date().toTimeString()))
    //   .subscribe((ms) => { this.receiveTitle(ms) })//take操作符是指从源开始计数,取出多少数据.
    // this.sub = this.subject.pipe(skip(3)).pipe(map(m => new Date().toTimeString()))
    //   .subscribe(m => this.receiveTitle(m))//skip操作符可以抑制Observable发射的前N项的数据
    // this.subject.pipe(tap(m => console.log(m))).pipe(map(m => m + new Date().toTimeString()))
    //   .subscribe(m => this.receiveTitle(m));//tap操作符可以用来调试
    this.bhvSubject.subscribe(m => { this.receiveTitle(m) })
  };
}
