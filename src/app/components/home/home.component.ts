import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // message: string = '我是父组件传入的值';
  arr1: Array<string> = ['小明', '大明', '二明'];
  items: Array<string> = ['item1', 'item2', 'item3'];
  constructor(private cal1: CalculatorService) { }
  addNewItem(event) {
    this.items.push(event);
  }
  addData(value: string) {
    this.arr1.push(value);
    console.log(value);

  }
  ngOnInit(): void {
  }

  public getLastResult() {
    console.log('上次计算的结果:', this.cal1.lastResult);
  }

}
