import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICar } from '../model/i-cars';
import { IQueryResult } from '../model/i-query-result';
import { map } from 'rxjs/operators';

// export interface IQueryResult{
//   items:Array<>
// }

@Injectable()

export class CarsService {

  private apiGateway: string = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  public query(name?: string, startAge?: number, endAge?: number, page?: number, limit?: number): Observable<IQueryResult<ICar>> {
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
    if (page) {
      url += `&_page=${page}`;
    }
    if (limit) {
      url += `&_limit=${limit}`;
    }
    return this.http.get<IQueryResult<ICar>>(url, { observe: 'response' }).pipe(map(res => {
      const totalStr = res.headers.get('X-Total-Count');
      const total = Number(totalStr);
      return { total, items: res.body } as any;
    }));
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
