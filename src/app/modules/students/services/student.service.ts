import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../models/i-student';

@Injectable()
export class StudentService {

  private apiGateway: string = 'http://localhost:3002';

  public constructor(
    private http: HttpClient
  ) { }

  public query(): Observable<Array<IStudent>> {
    return this.http.get<Array<IStudent>>(`${this.apiGateway}/students`);
  }


}
