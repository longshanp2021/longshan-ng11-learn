import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {

  public message: string = 'hello world';
  public messageChange = new Subject<string>();
  public constructor() {
    console.log('message service ctor');

  }

  public ngOnDestroy(): void {
    console.log('message service destroy');
  }

  public publishMessageChange(ms: string) {
    this.message = ms;
    this.messageChange.next(this.message)
  }

}
