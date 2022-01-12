import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo06',
	templateUrl: './ejemplo06.component.html',
	styleUrls: ['./ejemplo06.component.css']
})
export class Ejemplo06Component implements OnInit {
	public valor1=0;
	public valor2=0;
	public resultado=0;
	public tipo:string = '';

	constructor() { }

	ngOnInit(): void { }

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

}
