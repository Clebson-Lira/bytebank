import { Component, ViewChild } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';
import { Transferencia } from '../module/transferencia';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from '../shared/alert-modal.service';
import { ModalService } from '../service/modal.service';
import { EMPTY, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  transferencias: Transferencia[] = [];
  transferencia: any;
  bsModalRef!: BsModalRef;
  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  transferenciaSelecionada!: Transferencia;

  constructor(
    private service: TransferenciaService,

    private alertService: AlertModalService,

    private modalService: ModalService,

  ) {
    this.getTransferencia();
  }

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

  isAsc2: boolean = false;
  isAsc: boolean = true;
  key: string = 'valor';
  kyj: string = 'data';

  sort(key: string) {
    this.key = key;
    this.isAsc = !this.isAsc;
  }

  sort2(kyj: string) {
    this.kyj = kyj;
    this.isAsc2 = !this.isAsc2;
  }
  verDetails(transferencia: Transferencia) {
    this.modalService.abrirDetalhesModal(transferencia);
  }

  getTransferencia(): void {
    this.service
      .todas()
      .subscribe((transferencia) => (this.transferencia = transferencia));
  }

  onDelete(transferencia: Transferencia) {
    this.transferenciaSelecionada = transferencia;
    //this.deleteModalRef = this.bsmodalService.show(this.deleteModal, {class: 'modal-sm'})
    const result$ = this.alertService.showConfirm(
      'Confirmação',
      'Deseja exluir?',
      'sim',
      'Cancelar'
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.service.remov(transferencia.id) : EMPTY
        )
      )
      .subscribe((success) => {
        this.ngOnInit();
      });
    this.ngOnInit();
  }

  /* onConfirmDelete(transferencia: Transferencia){

    this.service.remov(this.transferenciaSelecionada.id).subscribe();
    this.deleteModalRef.hide();
    this.ngOnInit();
  }*/

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  /*handleError() {
    this.alertService.showAlertSuccess('Nenhuma transferência cadastrada');
     Ou use o AlertModalComponent se necessário
     this.bsModalRef = this.modalService.show(AlertModalComponent);
     this.bsModalRef.content.type = 'success';
     this.bsModalRef.content.message = 'Nenhuma transferência cadastrada';
  }*/
}