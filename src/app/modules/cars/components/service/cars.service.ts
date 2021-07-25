import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICar } from '../model/i-cars';

@Injectable()

export class CarsService {

  private apiGateway: string = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  public query(name?: string, startAge?: number, endAge?: number): Observable<Array<ICar>> {
    let url = `${this.apiGateway}/cars?`;
    if (name) {
      url += `&name_like=${name}`;
    }
    if (startAge) {
      url += `&age_gte=${startAge}`;
    }
    if (endAge) {
      url += `&age_lte=${endAge}`;
    }

    return this.http.get<Array<ICar>>(url);
  }

  public create(data: ICar): Observable<Array<ICar>> {
    return this.http.post<Array<ICar>>(`${this.apiGateway}/cars`, data);
  }

  public delete(id: any): Observable<Array<ICar>> {
    return this.http.delete<Array<ICar>>(`${this.apiGateway}/cars/${id}`);
  }

  public patch(id: any, data): Observable<Array<ICar>> {
    return this.http.patch<Array<ICar>>(`${this.apiGateway}/cars/${id}`, data);
  }
}
