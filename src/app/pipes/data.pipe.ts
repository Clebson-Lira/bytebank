import { Pipe, PipeTransform } from '@angular/core';
import { Transferencia } from '../module/transferencia';

@Pipe({
    name: 'data',
    standalone: true // Adicionado standalone
})
export class DataPipe implements PipeTransform {

  transform(list: Transferencia[], field: string, isAsc2:boolean ): Transferencia[] {
    if (!list)return[];
    if (!field)return list;

    list.sort((data1:any, data2:any)=>{
      if (data1[field] < data2[field]) {
        return isAsc2 ? -1:1;
      }
      if (data1[field] > data2[field]) {
        return isAsc2 ? 1:-1;
      }
      return 0;

    })

    return list;
  }


}
