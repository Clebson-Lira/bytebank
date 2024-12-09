import { Pipe, PipeTransform } from '@angular/core';

import { Transferencia } from '../module/transferencia';

@Pipe({
  name: 'order',
  standalone: true // Adicionado standalone
})
export class OrderPipe implements PipeTransform {


  transform(list: Transferencia[], field: string, isAsc:boolean ): Transferencia[] {
    if (!list)return[];
    if (!field)return list;

    list.sort((valor1:any, valor2:any)=>{
      if (valor1[field] < valor2[field]) {
        return isAsc ? -1:1;
      }
      if (valor1[field] > valor2[field]) {
        return isAsc ? 1:-1;
      }
      return 0;

    })

    return list;
  }

}
