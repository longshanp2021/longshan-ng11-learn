import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() msg;
  @Output() title = new EventEmitter<string>();
  addItem(value: string) {
    this.title.emit(value);
    console.log(this.title.emit);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
