import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalChildLearnComponent } from "../modal-child-learn/modal-child-learn.component";
@Component({
  selector: 'app-modal-learn',
  templateUrl: './modal-learn.component.html',
  styleUrls: ['./modal-learn.component.scss']
})
export class ModalLearnComponent {
  title: string;
  @ViewChild(ModalChildLearnComponent)
  public child: ModalChildLearnComponent;
  isVisible = false;

  constructor(private modalService: NzModalService) { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    console.log(this.child.name);
    console.log(this.child.password);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }
}
