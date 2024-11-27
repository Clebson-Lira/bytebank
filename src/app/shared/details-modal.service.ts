import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../module/transferencia';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsModalService {
  private apiUrl = 'http://localhost:3000/transferencias';


  constructor(private modalService: BsModalService,private httpClient:HttpClient ) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.modalService.show(DetailsModalComponent);
      bsModalRef.content.type = type;
      bsModalRef.content.message = message;
  }

  getItem(id: number){
    return this.httpClient.get<Transferencia>(`${this.apiUrl}/${id}`).pipe(take(1));
  }

}
