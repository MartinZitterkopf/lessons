import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Articulo } from './models/articulo';

@Component({
	selector: 'app-ejemplo08',
	templateUrl: './ejemplo08.component.html',
	styleUrls: ['./ejemplo08.component.css']
})
export class Ejemplo08Component implements OnInit {
	public columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];
	public datos: Articulo[] = [new Articulo(1, 'papas', 55),
								new Articulo(2, 'manzana', 50),
								new Articulo(3, 'naranjas', 30),];

	// public articuloselect: Articulo = new Articulo(0,"",0);
	public articuloselect: Articulo = new Articulo(null, null, null);

	@ViewChild(MatTable) tabla1!: MatTable<Articulo>;

	constructor() { }

	ngOnInit(): void {
	}

	borrarFila(cod: number) {
		if (confirm("Realmente quiere borrarlo?")) {
			this.datos.splice(cod, 1);
			this.tabla1.renderRows();
		}
	}

	agregar() {
		this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.descripcion, this.articuloselect.precio));
		this.tabla1.renderRows();
		this.articuloselect = new Articulo(null, null, null);
	}
}
