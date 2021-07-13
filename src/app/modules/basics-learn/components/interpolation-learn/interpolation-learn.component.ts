import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './curstomers';

const myName = 'sdfdsdsdfs';

@Component({
  selector: 'app-interpolation-learn',
  templateUrl: './interpolation-learn.component.html',
  styleUrls: ['./interpolation-learn.component.scss']
})
export class InterpolationLearnComponent implements OnInit {
  title = 'Featured product';
  itemImageUrl = '../assets/potted-plant.png';
  currentCustomer = '我是小明同学';
  curstomers = CUSTOMERS;
  itemImageUrl2 = '';
  getVel(): number { return 2 };
  constructor() { }

  ngOnInit(): void {

  }

  test() {

  }

}
