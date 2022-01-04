import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo01Component } from './tutorial/ejemplo01/ejemplo01.component';
import { Ejemplo02Component } from './tutorial/ejemplo02/ejemplo02.component';
import { Ejemplo03Component } from './tutorial/ejemplo03/ejemplo03.component';
import { Ejemplo04Component } from './tutorial/ejemplo04/ejemplo04.component';
import { DadoComponent } from './tutorial/ejemplo04/dado/dado.component';
import { NuevodadoComponent } from './tutorial/ejemplo04/nuevodado/nuevodado.component';
import { CronometroComponent } from './tutorial/ejemplo04/cronometro/cronometro.component';
import { SelectornumericoComponent } from './tutorial/ejemplo04/selectornumerico/selectornumerico.component';
import { Selectornumerico2Component } from './tutorial/ejemplo04/selectornumerico2/selectornumerico2.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo01Component,
    Ejemplo02Component,
    Ejemplo03Component,
    Ejemplo04Component,
    DadoComponent,
    NuevodadoComponent,
    CronometroComponent,
    SelectornumericoComponent,
    Selectornumerico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
