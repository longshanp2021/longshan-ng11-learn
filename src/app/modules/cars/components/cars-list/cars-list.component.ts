import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarsEditComponent } from "../cars-edit/cars-edit.component";
import { ICar } from '../model/i-cars';
import { CarsService } from "../service/cars.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  public name: string;
  public age: number;
  isVisible = false;
  public value: string;
  @ViewChild(CarsEditComponent)
  public child: CarsEditComponent;
  public cars: Array<ICar> = [];
  constructor(
    private carSrv: CarsService
  ) { }
  public query() {
    this.carSrv.query().subscribe(cars => {
      this.cars = cars;
    })
  }
  ngOnInit(): void {
    this.query();
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.carSrv.create(this.child.form.value).subscribe(car => this.query());
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  findCars() {
  }
  delete(id: any) {
    this.carSrv.delete(id).subscribe(() => {
      this.query();
    })
  }
}
