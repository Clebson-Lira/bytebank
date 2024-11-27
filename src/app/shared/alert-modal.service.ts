import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlerTypes{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

constructor(private modalService: BsModalService) { }

private showAlert(message: string, type: AlerTypes){
  const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
}

showAlertDanger(message: string){
 this.showAlert(message, AlerTypes.DANGER);
}

showAlertSuccess(message: string){
  this.showAlert(message, AlerTypes.SUCCESS);
}

showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string){
  const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
  bsModalRef.content.title = title;
  bsModalRef.content.msg = msg;
  bsModalRef.content.okTxt = okTxt;
  bsModalRef.content.cancelTxt = cancelTxt;

return (<AlertModalComponent>bsModalRef.content).confirmResult;
}

}
