import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  ascendente : Boolean = true;

  transform(heroes: Heroe[], ordenarPor: string = ''): Heroe[] {


    console.log(this.ascendente);

    switch (ordenarPor) {
      case 'nombre':
        return heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1) ;
        
      case 'vuela':
        return heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1)
        
      case 'color':
        return heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1)

      default:
        return heroes;
    }


  }



}
