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
import { Ejemplo05Component } from './tutorial/ejemplo05/ejemplo05.component';
import { ListadoarticulosComponent } from './tutorial/ejemplo05/listadoarticulos/listadoarticulos.component';
import { ElementosModule } from './elementos/elementos.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ejemplo06Component } from './tutorial/ejemplo06/ejemplo06.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { Ejemplo07Component } from './tutorial/ejemplo07/ejemplo07.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Ejemplo08Component } from './tutorial/ejemplo08/ejemplo08.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DialogoarticuloComponent } from './tutorial/ejemplo08/dialogoarticulo/dialogoarticulo.component';
import { MatDialogModule } from '@angular/material/dialog';

//-------------------------------------------------

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
    Selectornumerico2Component,
    Ejemplo05Component,
    ListadoarticulosComponent,
    Ejemplo06Component,
    Ejemplo07Component,
    Ejemplo08Component,
    DialogoarticuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ElementosModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatBadgeModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
