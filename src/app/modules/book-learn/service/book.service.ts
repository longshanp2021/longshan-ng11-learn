import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../model/i-book';

@Injectable()
export class BookService {
  public apiGateway: string = 'http://localhost:3002';

  constructor(
    private http: HttpClient
  ) { }

  public query(): Observable<Array<IBook>> {
    return this.http.get<Array<IBook>>(`${this.apiGateway}/book-learn`)
  }


}
