import { Component, OnInit } from '@angular/core';
import { MyCalculatorService } from '../../../services/my-calculator.service';

@Component({
  selector: 'app-second-level',
  templateUrl: './second-level.component.html',
  styleUrls: ['./second-level.component.scss'],
  // providers: [
  //   MyCalculatorService
  // ]
})
export class SecondLevelComponent implements OnInit {

  constructor(
    private myCalSrv: MyCalculatorService
  ) {
    console.log(`second level component service uuid:`, this.myCalSrv.uuid);

  }

  ngOnInit(): void {
  }

}
