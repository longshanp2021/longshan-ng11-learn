import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

interface IMyInputValue {
  area: string;
  county: string;
}

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MyInputComponent
    }
  ]
})
export class MyInputComponent implements OnInit, ControlValueAccessor {

  public form: FormGroup;
  private valueChangeFn: (val: any) => void;
  public areas = [
    {
      name: '未选中',
      code: null
    },
    {
      name: '宝山',
      code: 'baoshan'
    },
    {
      name: '浦东',
      code: 'pudong'
    },
    {
      name: '静安',
      code: 'jingan'
    }
  ];
  public counties = [
    {
      name: '大场',
      code: 'dachang',
      area: 'baoshan'
    },
    {
      name: '祁华镇',
      code: 'qihua',
      area: 'baoshan'
    },
    {
      name: '飞机场',
      code: 'feijichange',
      area: 'pudong'
    },
    {
      name: '未选中',
      code: null
    },
  ];
  public constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      area: [],
      county: []
    });
  }

  public ngOnInit(): void {

    this.form.valueChanges.subscribe(val => {
      let validValue = this.validSelect(val);
      this.form.patchValue(validValue, { emitEvent: false });
      this.valueChangeFn(val);
    });
  }

  public writeValue(obj: IMyInputValue): void {
    if (!obj) { return; }
    this.form.patchValue(obj, { emitEvent: false });
  }

  public registerOnChange(fn: any): void {
    this.valueChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    //
  }

  public setDisabledState?(isDisabled: boolean): void {
    //
  }

  public reset(): void {
    this.form.reset();
  }

  public validSelect(val: IMyInputValue): IMyInputValue {
    let areaValue = null;
    let countyValue = null;
    if (val.area === null) {
      countyValue = null;
    }
    if (val.area) {
      areaValue = val.area;
      let thisCounty = this.counties.find(c => c.code === val.county);
      let parentArea = this.areas.find(c => c.code === thisCounty.area);
      if (parentArea?.code === val.area) {
        countyValue = val.county;
      }
    }
    return { area: areaValue, county: countyValue };
  }



}
