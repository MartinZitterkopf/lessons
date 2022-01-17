import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo06',
	templateUrl: './ejemplo06.component.html',
	styleUrls: ['./ejemplo06.component.css']
})
export class Ejemplo06Component implements OnInit {

	//variables utilizadas en ejemplo 1
	public valor1!:number;
	public valor2!:number;
	public resultado!:number;
	public tipo:string = null;

	//variables utilizadas en ejemplo 2
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

	//variables utilizadas en ejemplo 3
	public valor100!:number;
	public valor200!:number;
	public resultado2!:string;
	public opcion1=false;
	public opcion2=false;
	public opcion3=false;
	public opcion4=false;

	//variables utilizadas en ejemplo 4
	public valor1000!:number;
	public valor2000!:number;
	public resultado3!:number;

	public operaciones04 = [
		{valor:'suma', muestraValor:'Sumar'},
		{valor:'resta', muestraValor:'Restar'},
		{valor:'multiplicacion', muestraValor:'Multiplicar'},
		{valor:'division', muestraValor:'Dividir'}
	];

	public seleccionada: string = this.operaciones04[0].valor;

	//------------------------------------------------------------

	constructor() { }

	//------------------------------------------------------------

	ngOnInit(): void { }

	//------------------------------------------------------------

	//funciones utilizadas en ejemplo 1
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

	public resetear(): void {
		this.valor1 = null;
		this.valor2 = null;
		this.resultado = null;
		this.tipo = null;
	}
	//funciones utilizadas en ejemplo 2
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

	//funciones utilizadas en ejemplo 3
	operaracion() {
		this.resultado2='';
		if (this.opcion1) {
		  let ope = this.valor100 + this.valor200;
		  this.resultado2+=`La suma es ${ope} | `;
		}
		if (this.opcion2) {
		  let ope = this.valor100 - this.valor200;
		  this.resultado2+=`La resta es ${ope} | `;
		}
		if (this.opcion3) {
		  let ope = this.valor100 * this.valor200;
		  this.resultado2+=`El producto es ${ope} | `;
		}
		if (this.opcion4) {
		  let ope = this.valor100 / this.valor200;
		  this.resultado2+=`La division es ${ope} `;
		}
	  }

	//funciones utilizadas en ejemplo 4
	operar04(){
		switch (this.seleccionada) {
			case 'suma' : this.resultado3 = this.valor1000 + this.valor2000;
					break;
			case 'resta' : this.resultado3 = this.valor1000 - this.valor2000;
					break;
			case 'multiplicacion' : this.resultado3 = this.valor1000 * this.valor2000;
					break;
			case 'division' : this.resultado3 = this.valor1000 / this.valor2000;
					break;
		}
	}

}
