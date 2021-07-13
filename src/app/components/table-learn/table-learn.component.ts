import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-learn',
  templateUrl: './table-learn.component.html',
  styleUrls: ['./table-learn.component.scss']
})
export class TableLearnComponent implements OnInit {
  arr: Array<object> = [];
  id: number = 0;
  name: string;
  age: number;
  remark: string;
  title = '我是好人';
  message: string = '/assets/1.png';
  b1 = '/assets/1.png';
  b2 = '/assets/2.png';
  b3 = '/assets/3.png';
  b4 = '/assets/4.png';
  a = 1;
  flag: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  click() {
    this.id += 1;
    this.arr.push({ id: this.id, name: this.name, age: this.age, remark: this.remark })
    console.log(this.arr);


  }
  // toggle() {

  //   // if (this.b === '/assets/1.png') {
  //   //   this.b = '/assets/2.png'
  //   // } else {
  //   //   this.b = '/assets/1.png'
  //   // }

  // }
  // toggle1() {
  //   // if (this.message === this.b1) {
  //   //   this.message = this.b2;
  //   // } else if (this.message === this.b2) {
  //   //   this.message = this.b3;
  //   // } else if (this.message === this.b3) {
  //   //   this.message = this.b4;
  //   // } else if (this.message === this.b3) {
  //   //   this.message = this.b1;
  //   // } else {
  //   //   this.message = this.b1;
  // }


}

