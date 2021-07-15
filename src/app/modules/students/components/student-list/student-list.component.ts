import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/i-student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students: Array<IStudent>;
  public constructor() { }

  public ngOnInit(): void {
  }

}
