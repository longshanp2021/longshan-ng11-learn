import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public arr: Array<string> = [];
  public data = new Subject();
  public data2 = new Observable();
  constructor() { }

  ngOnInit(): void {
  }


  public obtain() {
    console.log("Subject is ", this.data);
    console.log("Observable is", this.data2.pipe);


  }
}
