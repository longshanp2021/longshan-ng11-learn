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

  public query(): Observable<Array<IStudent>>{
    let url = `${this.apiGateway}/students`;
    return this.http.get<Array<IStudent>>(url);
  }

  public create(data: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.apiGateway}/students`, data);
  }

  public delete(id: any) {
    return this.http.delete<IStudent>(`${this.apiGateway}/students/${id}`);
  }

  public patch(id: any, data: IStudent) {
    return this.http.patch<IStudent>(`${this.apiGateway}/students/${id}`, data)
  }

  riverPersonQuery(){
    return this.http.get(`/productionApi/inspector-plan/getData/?offset=0&limit=15&type=河长制&startTime=2022-01-01&endTime=2023-07-31`)
  }
}
