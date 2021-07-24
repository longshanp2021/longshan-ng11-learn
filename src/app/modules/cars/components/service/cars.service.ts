import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICar } from '../model/i-cars';
@Injectable()
export class CarsService {
  private apiGateway: string = 'http://localhost:3002';
  constructor(private http: HttpClient) { }


  public query(): Observable<Array<ICar>> {
    return this.http.get<Array<ICar>>(`${this.apiGateway}/cars`)
  }
  public create(data: ICar): Observable<Array<ICar>> {
    return this.http.post<Array<ICar>>(`${this.apiGateway}/cars`, data)
  }
  public delete(id: any): Observable<Array<ICar>> {
    return this.http.delete<Array<ICar>>(`${this.apiGateway}/cars/${id}`)
  }
}
