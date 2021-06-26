import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent{

  //El pipe number redondea a tres decimales
  ventasNetas : number = 18761584.4355;
  porcentaje : number = 0.5754;


}
