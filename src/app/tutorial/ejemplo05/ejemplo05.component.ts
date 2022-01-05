import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo05',
	templateUrl: './ejemplo05.component.html',
	styleUrls: ['./ejemplo05.component.css']
})
export class Ejemplo05Component implements OnInit {
	public articulos = [{codigo:1, descripcion:'escritorio', precio:8700},
						{codigo:2, descripcion:'silla gamer', precio:28000},	
						{codigo:3, descripcion:'mouse gamer', precio:4700},
						{codigo:4, descripcion:'teclado gamer', precio:8000},
						{codigo:5, descripcion:'monitor', precio:26000},
					];

	constructor() { }

	ngOnInit(): void {
	}

}
