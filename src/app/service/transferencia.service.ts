import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Transferencia } from './../module/transferencia';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private apiUrl = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  remov(id: number): Observable<Transferencia> {

    return this.httpClient.delete<Transferencia>(`${this.apiUrl}/${id}`).pipe(take(1));
    
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.apiUrl).pipe(take(1));
  }

  /*getItemId(id: number): Observable<Transferencia> {
    return this.httpClient.get<Transferencia>(`${this.apiUrl}/${id}`).pipe(take(1));
  }*/

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.apiUrl, transferencia).pipe(take(1));
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
