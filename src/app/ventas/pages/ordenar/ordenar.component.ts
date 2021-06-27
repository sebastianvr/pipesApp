import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {


  enMayusculas: boolean = false;

  ordenarPor : string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }

  ];
  cambiar() {
    this.enMayusculas ? this.enMayusculas = false : this.enMayusculas = true;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
