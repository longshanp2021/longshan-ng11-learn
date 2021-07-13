import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit, OnDestroy {

  public message: string;
  public constructor(
    private msSrv: MessageService
  ) {
    this.message = this.msSrv.message;
  }

  public ngOnDestroy(): void {
    console.log('level3 destroy');
  }

  public ngOnInit(): void {
    this.msSrv.messageChange.subscribe(ms => {
      this.message = ms;
    });

  }


}
