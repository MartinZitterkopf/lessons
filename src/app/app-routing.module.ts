import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo01Component } from './tutorial/ejemplo01/ejemplo01.component';
import { Ejemplo02Component } from './tutorial/ejemplo02/ejemplo02.component';
import { Ejemplo03Component } from './tutorial/ejemplo03/ejemplo03.component';
import { Ejemplo04Component } from './tutorial/ejemplo04/ejemplo04.component';


const routes: Routes = [
  {
    path:'ejemplo01',
    component: Ejemplo01Component
  },
  {
    path: 'ejemplo02',
    component: Ejemplo02Component
  },
  {
    path: 'ejemplo03',
    component: Ejemplo03Component
  },
  {
    path: 'ejemplo04',
    component: Ejemplo04Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }