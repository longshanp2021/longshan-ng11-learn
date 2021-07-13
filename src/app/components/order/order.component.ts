import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  time: number = 0;
  time2: number = 0;
  color = '';
  constructor() {
  }
  degree(e) {
    this.time = e;
    console.log(1, e);

  }

}
