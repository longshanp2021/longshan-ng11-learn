import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;

  @Input()
  counterValue = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      age: [],
    });
  }
  ngOnInit(): void {
    this.form.valueChanges.subscribe((res) => {
      this.propagateChange(res);
    });
  }

  propagateChange = (_: any) => {};
  /**
   * 这个是我们想要更新CounterValue模型的地方，因为这是视图中使用的内容。
   * 将新值从表单模型写入视图或DOM属性的方法
   * @param value
   */
  writeValue(value: any): void {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  /**
   * 这个方法是一个注册处理程序的方法，改方法应该在视图中的某些内容发生更改是调用。它获取一个函数，
   * 改函数告诉其他窗体指令和窗体控件更新它们的值。换句话说这是我们希望在CounterValue通过视图发生更改时调用的处理程序函数。
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  /**
   * 这个方法专门为控件接收触摸事件注册一个处理程序。不需要在我们的定制控制
   * @param fn
   */
  registerOnTouched(fn: any): void {
  }
}
