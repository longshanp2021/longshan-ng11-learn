import { Component, OnInit } from '@angular/core';
import { HEROES } from "../../hero1";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  heroes = HEROES;
  master = 'Master';
  constructor() { }

  ngOnInit(): void {
  }

}
