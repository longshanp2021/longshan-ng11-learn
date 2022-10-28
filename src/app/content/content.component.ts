import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  
  ngOnChanges() {
    console.log('数值改变');
  }

  ngDoCheck() {
    console.log('做总检测');
  }
  
  ngOnInit(): void {
    console.log('组件初始化');
  }
  ngAfterContentInit() {
    console.log('内容之后初始化');
  }

  ngAfterContentChecked() {
    console.log('内容之后做检测');
  }

  ngAfterViewInit() {
    console.log('视图之后初始化');
  }

  ngAfterViewChecked() {
    console.log('视图之后做检测');
  }

  ngOnDestroy() {
    console.log('组件销毁');
  }
}
