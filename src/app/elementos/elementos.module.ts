import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewdadoComponent } from './newdado/newdado.component';


@NgModule({
	declarations: [NewdadoComponent],
	imports: [
		CommonModule,
	],
	exports: [NewdadoComponent]
})
export class ElementosModule { }
