import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo01',
	templateUrl: './ejemplo01.component.html',
	styleUrls: ['./ejemplo01.component.css']
})
export class Ejemplo01Component implements OnInit {

	nombre: string = 'ZITTERKOPF, Martin';
	edad: number = 28;
	email: string = 'martin_unlz@hotmail.com.ar';
	sueldos: number[] = [36545, 36475, 36515];
	activo: boolean = true;
	sitio = 'http://www.google.com';

	constructor() { 

	}

	ngOnInit(): void {
		
	}

	esActivo(): string {
		if (this.activo) {
			return 'Actualmente empleado';
		}
		else {
			return 'Desempleado';
		}
	}

	ultimos3sueldos(): number {
		let suma: number = 0;
		for (let x = 0; x < this.sueldos.length; x++) {
			suma += this.sueldos[x];
		}
		return suma;
	}

	

}
