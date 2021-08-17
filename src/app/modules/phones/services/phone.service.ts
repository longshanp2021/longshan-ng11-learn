import { Injectable } from '@angular/core';
import { IPhone } from "../models/i-phone";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()

export class PhoneService {

  private apiGateway: string = 'http://localhost:3002';

  constructor(
    private http: HttpClient
  ) { }

  public query(): Observable<Array<IPhone>> {
    let url = `${this.apiGateway}/phones`;
    return this.http.get<Array<IPhone>>(url);
  }
}
