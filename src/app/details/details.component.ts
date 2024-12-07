import { Component, OnInit, Output } from '@angular/core';
import { Transferencia } from '../module/transferencia';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    standalone: false
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
