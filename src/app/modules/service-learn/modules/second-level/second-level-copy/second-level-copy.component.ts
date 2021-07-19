import { Component, OnInit } from '@angular/core';
import { MyCalculatorService } from '../../../services/my-calculator.service';

@Component({
  selector: 'app-second-level-copy',
  templateUrl: './second-level-copy.component.html',
  styleUrls: ['./second-level-copy.component.scss'],
  // providers: [
  //   MyCalculatorService
  // ]
})
export class SecondLevelCopyComponent implements OnInit {

  constructor(
    private myCalSrv: MyCalculatorService
  ) {
    console.log(`second level copy component service uuid:`, this.myCalSrv.uuid);
  }

  ngOnInit(): void {
  }

}
