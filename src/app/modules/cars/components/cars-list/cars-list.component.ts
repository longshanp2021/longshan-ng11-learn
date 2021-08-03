import { Component, OnInit, ViewChild } from '@angular/core';
import { CarsEditComponent } from "../cars-edit/cars-edit.component";
import { ICar } from '../../model/i-cars';
import { CarsService } from "../../service/cars.service";
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
  public limit: number = 10;
  public total: number;
  public disablePaginator: boolean;
  public isVisible = false;
  public value: string;
  public cars: Array<ICar> = [];
  public constructor(
    private carSrv: CarsService,
    private modalService: NzModalService,
    private fb: FormBuilder
  ) {
    this.form =this.fb.group({
      name: [],
      startAge: [],
      endAge: [],
      page: [1]
    });
  }

  public ngOnInit(): void {
    this.findCars();
  }

  public onSave(): void {
    this.isVisible = false;
    if (this.child.form.value.id) {
      this.carSrv.patch(this.child.form.value.id, this.child.form.value).subscribe(() => this.findCars());
    } else {
      this.carSrv.create(this.child.form.value).subscribe(() => this.findCars());
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
            this.findCars();
          });
        }
      }
    );
  }
  public pageIndex() {
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
    // console.log(this.child);
    
  }

  public chagePageIndex(page: number) {
    console.log(page);

    this.form.patchValue({ page });
    this.findCars();
  }

  public findCars() {
    let data = this.form.value;

    this.carSrv.query(data.name, data.startAge, data.endAge, data.page, this.limit).subscribe(res => {
      this.cars = res.items;
      this.total = res.total;
    });
  }

}
