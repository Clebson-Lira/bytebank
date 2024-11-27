import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent  implements OnInit{
  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt?: string = 'Cancelar';
  @Input() okTxt?: string = 'Sim';
  @Input() showFooter: boolean = true;

  confirmResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.confirmResult = new Subject();
  }



  onConfirm(){
    this.confirmAndClose(true);
  }


  onClose(){
   this.confirmAndClose(false);
  }

  public confirmAndClose(value:boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }



}
