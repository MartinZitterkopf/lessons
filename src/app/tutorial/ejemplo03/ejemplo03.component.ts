import { Component, OnInit } from '@angular/core';

export class Articulo {
	codigo: number = 0;
	descripcion: string = '';
	precio: number = 0;
}

@Component({
	selector: 'app-ejemplo03',
	templateUrl: './ejemplo03.component.html',
	styleUrls: ['./ejemplo03.component.css']
})
export class Ejemplo03Component implements OnInit {

	public contador: number = 0;
	public nombre: string = '';
	public apellido: string = '';
	public art: Articulo = {
		codigo: 0,
		descripcion: "ingrese algo",
		precio: 0
	}

	articulos: Articulo[] = [];

	// -----------------------------------------------------------------------------

	constructor() {
		console.log("se inicio ejemplo 03");
	}

	// -----------------------------------------------------------------------------

	ngOnInit(): void {
		console.log("arranco el on init");
	}

	incrementar() {
		this.contador++;
	}

	decrementar() {
		this.contador--;
	}

	hayRegistros() {
		return this.articulos.length > 0;
	}

	borrar(codigo: number) {
		for (let x = 0; x < this.articulos.length; x++) {
			if (this.articulos[x].codigo == codigo) {
				this.articulos.splice(x, 1);
				return;
			}
		}
	}

	agregar() {
		if (this.art.codigo == 0) {
			alert('Debe ingresar un código de articulo distinto a cero');
			return;
		}
		for (let x = 0; x < this.articulos.length; x++) {
			if (this.articulos[x].codigo == this.art.codigo) {
				alert('ya existe un articulo con dicho codigo');
				return;
			}
		}

		//for(const articulo in this.articulos) {}

		this.articulos.push({
			codigo: this.art.codigo,
			descripcion: this.art.descripcion,
			precio: this.art.precio
		});

		//this.articulos.push(this.art);

		this.art.codigo = 0;
		this.art.descripcion = "";
		this.art.precio = 0;
	}

	seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
		this.art.codigo = art.codigo;
		this.art.descripcion = art.descripcion;
		this.art.precio = art.precio;
	}

	modificar() {
		for (let x = 0; x < this.articulos.length; x++)
			if (this.articulos[x].codigo == this.art.codigo) {
				this.articulos[x].descripcion = this.art.descripcion;
				this.articulos[x].precio = this.art.precio;
				return;
			}
		alert('No existe el código de articulo ingresado');
	}
}