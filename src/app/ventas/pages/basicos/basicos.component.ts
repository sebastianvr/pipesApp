import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
SharedModule

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombre : string = 'sebastian';
  apellido: string = 'vidal'
  fullname: string = 'SeBaStIaN ViDaL'

  fecha : Date = new Date();
}
