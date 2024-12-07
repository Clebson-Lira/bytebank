import { Component, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Transferencia } from '../../module/transferencia';
import { DetailsModalService } from '../details-modal.service';
import { TransferenciaService } from 'src/app/service/transferencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-details-modal',
    templateUrl: './details-modal.component.html',
    styleUrls: ['./details-modal.component.scss'],
    standalone: false
})
export class DetailsModalComponent implements OnInit {
  @Output()


  transferencia!: Transferencia;

  id!: number;

  constructor(
    public bsModalRef: BsModalRef,
    private route: ActivatedRoute,

  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
