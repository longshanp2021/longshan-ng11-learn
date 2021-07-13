import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit, OnDestroy {


  public message: string;
  public constructor(
    private msSrv: MessageService
  ) {
    this.message = this.msSrv.message;
  }

  public ngOnDestroy(): void {
    console.log('level2 destroy');
  }

  public ngOnInit(): void {
    this.msSrv.messageChange.subscribe(ms => {
      this.message = ms;
    });

  }


}
