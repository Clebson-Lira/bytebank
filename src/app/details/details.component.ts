import { Component, LOCALE_ID, OnInit, Output } from '@angular/core';
import { Transferencia } from '../module/transferencia';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    imports: [CommonModule],
    providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pt' }]
})
export class DetailsComponent  {
  @Output()
  transferencia!: Transferencia;

  constructor(
    public BsModalRef: BsModalRef,
    private router: Router
  ) {}

  closeModal() {
    this.BsModalRef.hide();
    this.router.navigateByUrl('extrato');
  }
}
