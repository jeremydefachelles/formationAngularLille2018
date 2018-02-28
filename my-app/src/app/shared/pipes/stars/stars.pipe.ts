import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../../enums/state.enum';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    console.log(args);
    if (args === State.ALIVRER) {
      return `AL - ${value}`;
    }
    if (args === State.ENCOURS) {
      return 'ENC - ' + value;
    }
    if (args === State.LIVREE) {
      return 'L - ' + value;
    }
    return null;
  }

}
