import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as faker from "faker";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private apiGateway: string = 'http://localhost:3002';
  public constructor(
    private http: HttpClient
  ) { }

  public ngOnInit(): void {
  }

  public queryAllStudent(): void {
    this.http.get<any>(`${this.apiGateway}/students`).subscribe(res => {
      console.log('所有学生信息:', res);
    });
  }


  queryFirstStudent() {
    this.http.get<any>(`${this.apiGateway}/students/d`).subscribe(FirstStudent => {
      console.log(FirstStudent);
    })
  };
  public createStudent(): void {
    this.http.post<any>(`${this.apiGateway}/students/`, { name: '大明', age: 34 }).subscribe(ms => {
      console.log(ms);
    })

  };
  public ceateManyStudents(): void {
    for (let i = 0; i < 100; i++) {
      let s = { name: faker.name.findName(), age: faker.random.number({ min: 5, max: 45 }) };
      this.http.post<any>(`${this.apiGateway}/students/`, { name: s.name, age: s.age }).subscribe(ms => {
        console.log(ms);
      })
    }

  }

  public deleteStudent() {
    this.http.delete<any>(`${this.apiGateway}/students/g`).subscribe(ms => {
      console.log(ms);
    })
  }
  public editStudent() {
    this.http.patch<any>(`${this.apiGateway}/students/QemylrF`, { name: '小黑', age: 11 }).subscribe(ms => {
      console.log(ms);
    })
  };
}
