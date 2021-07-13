import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
  providers: [
    MessageService
  ]
})
export class Level1Component implements OnInit, OnDestroy {

  public message: string;
  public constructor(
    private msSrv: MessageService
  ) {
    this.message = this.msSrv.message;
    var node = document.getElementById('hhh');
    console.log('ctor:', node);

  }

  public ngOnDestroy(): void {
    console.log('level1 destroy');
  }

  public ngOnInit(): void {
    console.log('level1 onInit');
    var node = document.getElementById('hhh');
    console.log('onint:', node);
    this.msSrv.messageChange.subscribe(ms => {
      this.message = ms;
    });
  }

  public refreshMessage() {
    // let obj1 = { name: '1' };
    // let obj2 = obj1;
    // obj1.name = '2';
    // console.log('obj2:', obj2);
    // this.message = new Date().toTimeString();
    // this.msSrv.publishMessageChange(this.message);
    this.msSrv.publishMessageChange(new Date().toTimeString());
  }

  protected a1(){
    
  }

  private a2(){

  }
}
