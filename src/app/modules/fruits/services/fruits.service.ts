import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFruits } from '../components/models/i-fruits';

@Injectable()
export class FruitsService {

  private apiGateway: string = 'http://localhost:3002';

  public constructor(
    private http: HttpClient
  ) { }

  public query(): Observable<Array<IFruits>> {
    return this.http.get<Array<IFruits>>(`${this.apiGateway}/fruits`);
  }
  public create(data: IFruits) {
    return this.http.post<IFruits>(`${this.apiGateway}/fruits`, data)
  }
}