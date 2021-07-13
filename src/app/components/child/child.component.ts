import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from "../../services/storage.service";
import { add, Calculator } from "../../services/calculator";
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public number1: number = 1;
  public number2: number = 2;
  // private lastResult: number;
  private cal: Calculator;
  public constructor(storage: StorageService, private cal1: CalculatorService) {
    // storage.sayHello()
    // console.log(storage);
  }

  public ngOnInit(): void {
    // let n1 = 1;
    // let n2 = 2;
    // // let res = add(n1, n2);
    // // let tool = new Calculator();
    // // let res = tool.add(n1, n2);
    // this.lastResult = add(n1, n2);
    // console.log(res);

  }

  public calcu() {
    //
    // this.lastResult = add(this.number1, this.number2);
    //
    // this.cal = new Calculator();
    // this.cal.add(this.number1, this.number2);
    // 
    this.cal1.add(this.number1, this.number2);

    console.log('计算完毕');

  }

  public getLastResult() {
    //
    // console.log('上次计算的结果:', this.lastResult);
    //
    // console.log('上次计算的结果:', this.cal.lastResult);
    //
    console.log('上次计算的结果:', this.cal1.lastResult);
  }

}


