import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo02',
	templateUrl: './ejemplo02.component.html',
	styleUrls: ['./ejemplo02.component.css']
})
export class Ejemplo02Component implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	nombre: string = 'ZITTERKOPF, Martin';
	edad: number = 28;
	sueldos: number[] = [36545, 36475, 36515];

}
