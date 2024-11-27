import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Transferencia } from 'src/app/module/transferencia';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferenciaService } from '../../service/transferencia.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent  implements OnInit{
  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt: 'Cancelar';
  @Input() okTxt: 'sim';

  confirmResult: Subject<boolean>;

  transferenciaSelecionada: Transferencia;
  modalRef: BsModalRef;
  message: string;
  constructor(public modalService: BsModalService, public bsModalRef: BsModalRef, public service: TransferenciaService) {}
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
