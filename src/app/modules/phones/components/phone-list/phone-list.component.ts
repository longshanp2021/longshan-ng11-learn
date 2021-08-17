import { Component, OnInit } from '@angular/core';
import { PhoneService } from "../../services/phone.service";
import { Subject } from "rxjs";
@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})

export class PhoneListComponent implements OnInit {
  public phones: Array<object> = [];
  // public source$ = new Observable(observer => {
  //   let number = 1
  //   setInterval(() => {
  //     observer.next(number++)
  //   }, 1000)
  // })
  // observer = {
  //   next: item => {
  //     console.log(item);
  //   }
  // }

  constructor(
    private phoneSrv: PhoneService
  ) { }

  public ngOnInit(): void {
    this.queryPhone();
  }

  public queryPhone() {
    this.phoneSrv.query().subscribe(rel => {
      this.phones = rel;
    })
  }

  public addPhpone() {
    // console.log('开始');
    // this.source$.subscribe(this.observer)
    // console.log('结束');
  }

  public resetPhpone() { }

  public findPhpone() { }

}
