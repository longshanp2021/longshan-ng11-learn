import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  sayHello() {
    console.log('你好呀~~');
  }
}
