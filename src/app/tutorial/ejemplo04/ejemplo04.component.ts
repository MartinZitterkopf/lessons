import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo04',
	templateUrl: './ejemplo04.component.html',
	styleUrls: ['./ejemplo04.component.css']
})
export class Ejemplo04Component implements OnInit {
	public valor1: number;
	public valor2: number;
	public valor3: number;
	public resultado: string = "";
	public mensaje: string = "";

	constructor() {
		this.valor1 = this.retornarAleatorio();
		this.valor2 = this.retornarAleatorio();
		this.valor3 = this.retornarAleatorio();
	}

	retornarAleatorio() {
		return Math.trunc(Math.random() * 6) + 1;
	}

	tirar() {
		this.valor1 = this.retornarAleatorio();
		this.valor2 = this.retornarAleatorio();
		this.valor3 = this.retornarAleatorio();
		if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
			this.resultado = 'Ganó';
		else
			this.resultado = 'Perdió';
	}

	actualizar(t: number): void {
		this.mensaje = t + '(se actualiza cada 10 segundos)';
	}

	ngOnInit(): void {
	}

}
