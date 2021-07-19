import { Injectable, OnDestroy } from '@angular/core';
import * as faker from 'faker';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MyCalculatorService implements OnDestroy {

  public uuid: string;
  public constructor() {
    this.uuid = faker.datatype.uuid();
  }

  public ngOnDestroy(): void {
    console.log(`the ${this.uuid} service destroy`);
  }

}
