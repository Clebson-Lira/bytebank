import { Injectable, Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Transferencia } from '../module/transferencia';
import { DetailsComponent } from '../details/details.component';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private listaTransferencia: any[];
  public  show: any;

  constructor(private bsmodalService: BsModalService, ) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  abrirDetalhesModal(transferencia: Transferencia) {
    const modalRef = this.bsmodalService.show(DetailsComponent);

    modalRef.content.transferencia = transferencia;
  }
  openModal(remov) {
    const modalRef = this.bsmodalService.show(AlertModalComponent);

    modalRef.content.message = remov;
  }



}
