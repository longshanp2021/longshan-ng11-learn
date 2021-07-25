import { Component, OnInit, ViewChild } from '@angular/core';
import { CarsEditComponent } from "../cars-edit/cars-edit.component";
import { ICar } from '../model/i-cars';
import { CarsService } from "../service/cars.service";
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @ViewChild(CarsEditComponent)
  public child: CarsEditComponent;
  public form: FormGroup;
  public name: string;
  public startAge: number;
  public endAge: number;
  public isVisible = false;
  public value: string;
  public cars: Array<ICar> = [];
  public constructor(
    private carSrv: CarsService,
    private modalService: NzModalService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: [],
      startAge: [],
      endAge: []
    })
  }

  public ngOnInit(): void {
    this.query();
  }

  public onSave(): void {
    this.isVisible = false;
    if (this.child.form.value.id) {
      this.carSrv.patch(this.child.form.value.id, this.child.form.value).subscribe(() => this.query());
    } else {
      this.carSrv.create(this.child.form.value).subscribe(() => this.query());
    }
  }

  public cancel(): void {
    this.isVisible = false;
  }

  public delete(id: any) {
    this.modalService.confirm(
      {
        nzContent: '确定删除吗?',
        nzOkText: '确定',
        nzCancelText: '取消',
        nzWidth: '600px',
        nzOnOk: () => {
          this.carSrv.delete(id).subscribe(() => {
            this.query();
          });
        }
      }
    );
  }

  public cleanCars() {
    this.form.reset()
  }

  public createCar(): void {
    this.isVisible = true;
    // this.child.form.patchValue({ name: null, age: null});
    this.child.form.reset();
  }

  public editCar(e: Object) {
    this.isVisible = true;
    this.child.form.patchValue(e);
  }

  public findCars(name: string, startAge: number, endAge: number) {
    this.carSrv.query(name, startAge, endAge).subscribe((cars) => {
      this.cars = cars
    });

  }

  private query() {
    this.carSrv.query().subscribe((cars) => {
      this.cars = cars;
    });
  }

}
