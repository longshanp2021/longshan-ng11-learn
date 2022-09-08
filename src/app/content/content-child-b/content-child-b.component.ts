import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child-b',
  templateUrl: './content-child-b.component.html',
  styleUrls: ['./content-child-b.component.scss'],
})
export class ContentChildBComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fun() {
    console.log('this is part-B !');
    return '哈哈哈'
  }
}
