import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-basic',
  templateUrl: './template-basic.component.html',
  styleUrls: ['./template-basic.component.scss']
})
export class TemplateBasicComponent implements OnInit {
  public isUnchanged = false;
  public title: string;
  public tip1: string = '请输入一些文字';
  public arr = [1, 2, 3];
  public constructor() { }
  public CurrentCusromer: string = '1'
  public ngOnInit(): void {
  }

  public save(): void {

  }

}
