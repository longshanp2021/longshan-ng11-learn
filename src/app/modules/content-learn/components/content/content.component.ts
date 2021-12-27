import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  move1: any;
  move2: any;
  move3: any;
  t1: number = 5;
  t2: number = 5;
  t3: number = 5;




  timeId_1: any;
  timeId_2: any;

  constructor() { }

  ngOnInit(): void {

  }



  test1() {
    setInterval(() => {
      if (this.t1 < 1520) {
        this.move1 = {
          'left': `${this.t1}px`,
          'transition-duration': '3s',
        }
        this.t1 = this.t1 + 20;
      } else {
        this.t1 = 5;
      }
    }, 1000)
    // setTimeout(() => {
    //   console.log(2);

    // }, 1000);
    // this.t = this.t + 1;
    // this.move = {
    //   'left': `${this.t}px`
    // }
  };

  test2() {
    setInterval(() => {
      if (this.t2 < 1520) {
        this.t2 = this.t2 + 20;
        this.move1 = {
          'left': `${this.t2}px`,
          'transition-duration': '3s',
        }
      } else {
        this.t2 = 5;
      }
    }, 1000)
  };

  test3() {
    setInterval(() => {
      if (this.t3 < 1520) {
        this.t3 = this.t3 + 20;
        this.move1 = {
          'left': `${this.t3}px`,
          'transition-duration': '3s',
        }
      } else {
        this.t3 = 5;
      }
    }, 1000)
  };



}
