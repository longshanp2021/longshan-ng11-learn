import { Component, OnInit } from '@angular/core';
import { IFruits } from "../models/i-fruits";
import { FruitsService } from "../services/fruits.service";
@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent implements OnInit {
  public fruits: Array<IFruits>;
  constructor(
    public fruitsSrv: FruitsService
  ) { }

  public ngOnInit(): void {
    this.queryFruits();

  }
  public queryFruits() {
    this.fruitsSrv.query().subscribe(fruits => { this.fruits = fruits; })
  }

}
