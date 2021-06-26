import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  // Pipe i18nSelect
  nombre: string = 'Maria'
  genero: string = 'femenino'

  // nombre : string = 'Sebastian'
  // genero : string = 'masculino'
  //dependiendo el genero va a mostrar el mensaje personalizado para hombre o mujer
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //Pipe i18nPural
  //agregar mas datos en arreglo lista para visualizar el cambio hacho en pipe
  lista: string[] = ['Sebastian', 'Carolina', 'Florencia', 'Rodrigo', 'Alan'];

  //other es para cualquuier otro valor para lista.length
  listaMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    this.nombre = 'Sebastian';
    this.genero = 'masculino'
  }
  
  borrarCliente() {
    this.lista.pop();
    
  }

  //keyvalue pipe
  objeto = {
    nombre : 'sebastian',
    apellido : 'vidal',
    edad : 26,
    carrera : 'Ing Civil Informática'
  }

  heroes = [
    {
      nombre : 'Superman',
      vuela: true
    },
    {
      nombre : 'Batman',
      vuela: true
    },
    {
      nombre : 'Flash',
      vuela: false
    }
  ];


  //async pipe
  miObservable = interval(1000); //emite valores numeros. 1,2,3,4,5,....

  miPromesa = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500);
  });
}
