import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo06',
	templateUrl: './ejemplo06.component.html',
	styleUrls: ['./ejemplo06.component.css']
})
export class Ejemplo06Component implements OnInit {
	//ejemplo 1
	public valor1=0;
	public valor2=0;
	public resultado=0;
	public tipo:string = '';

	//ejemplo 2
	public valor10!:number;
	public valor20!:number;
	public resultado1!:number;

	public operacionSeleccionada: string = '';
	public tipoOperaciones = [
		'suma',
		'resta',
		'multiplicacion',
		'division',
	];

	constructor() { }

	ngOnInit(): void { }

	//ejemplo 1
	sumar() {
		this.tipo = 'suma';
		this.resultado = this.valor1 + this.valor2;
	}

	restar() {
		this.tipo = 'resta';
		this.resultado = this.valor1 - this.valor2;
	}

	multiplicar() {
		this.tipo = 'multiplicacion';
		this.resultado = this.valor1 * this.valor2;
	}

	dividir() {
		this.tipo = 'division';
		this.resultado = this.valor1 / this.valor2;
	}

	//ejemplo 2
	operar() {
		switch (this.operacionSeleccionada) {
		  case 'suma' : this.resultado1 = this.valor10 + this.valor20;
						break;
		  case 'resta' : this.resultado1 = this.valor10 - this.valor20;
						 break;
		  case 'multiplicacion' : this.resultado1 = this.valor10 * this.valor20;
								  break;
		  case 'division' : this.resultado1 = this.valor10 / this.valor20;
							break;
		}
	  }

	public reset(): void {
		this.valor10 = null;
		this.valor20 = null;
		this.operacionSeleccionada = '';
		this.resultado1 = null;
	}
}
