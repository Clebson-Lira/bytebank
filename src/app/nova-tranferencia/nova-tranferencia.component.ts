import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';
import { Transferencia } from '../module/transferencia';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-nova-tranferencia',
    templateUrl: './nova-tranferencia.component.html',
    styleUrls: ['./nova-tranferencia.component.scss'],
    standalone: false
})
export class NovaTranferenciaComponent {

  id!: number;
  valor!: number;
  destino!: number;
  transferencias: Transferencia[] = [];

  constructor(private service: TransferenciaService, private router:Router, private route:ActivatedRoute){
    this.getTransferencia()
  }

  transferir(){
    console.log('tranferir')
    const valorEmitir: Transferencia = {
      valor: this.valor, destino: this.destino,
      id: this.id,
    };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    })

  }

  getTransferencia(): void{
    this.service.todas().subscribe((Transferencia) => (this.transferencias = this.transferencias));
  }
}
