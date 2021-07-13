import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public lastResult: number;

  public add(n1: number, n2: number) {
    this.lastResult = n1 + n2;
    return this.lastResult;
  }
}
