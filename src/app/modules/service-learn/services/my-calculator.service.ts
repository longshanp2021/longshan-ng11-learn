import { Injectable, OnDestroy } from '@angular/core';
import * as faker from 'faker';

// providedIn:root意思就是自动把这个服务放到AppModule的providers上面
// 慎用
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
