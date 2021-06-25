import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nombre : string = 'Maria'
  genero : string = 'femenino'
  
  // nombre : string = 'Sebastian'
  // genero : string = 'masculino'

  //dependiendo el genero va a mostrar el mensaje personalizado para hombre o mujer
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
}
