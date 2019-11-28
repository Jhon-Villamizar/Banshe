import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultClient = [];
    for (const client of value) {
      var x = String(client.nit);
      if(x.indexOf(arg) > -1){
        console.log('sisas');
        resultClient.push(client);
      }      
    }

    return resultClient;
  }
}
