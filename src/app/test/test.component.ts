import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  toggle: any = false;

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise<any>((resolve, reject) => {
      if (this.toggle) {
        resolve('请求正常!');
      } else {
        reject('请求失败!');
      }
    })

    promise.then((rel) => {
      console.log(`数据${rel}`);
    }).catch((rel) => {
      console.log(`数据${rel}`);
    }).finally(() => {
      console.log(`请求结束!`);

    })
  }



}
