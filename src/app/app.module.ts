import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//importo lo sgte para mostrar fechas en español, y en frances,
/**
 * declaracion de idiona español y frances para poder ser utilizado en 
 * variables tipo Date, utilizando el idiona seleccionado en los pipes 
 */
import LocalEs from '@angular/common/locales/es-CL';
import LocalFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
registerLocaleData(LocalEs);
registerLocaleData(LocalFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID,  useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
