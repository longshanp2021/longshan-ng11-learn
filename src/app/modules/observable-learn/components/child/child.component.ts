import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  @Input()
  public title: string = '';
  public msg1: string = '我是从子组件传过来的值';
  @Output()
  public emit= new EventEmitter<string>();
  constructor() { }

  public ngOnInit(): void {

  }

  addNewItem(value: string) {
    this.emit.emit(value);
  }
}
