import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Articulo } from './models/articulo';
import { MatPaginator } from '@angular/material/paginator';
import { Articulo02 } from './models/articulo02';
import { MatSort } from '@angular/material/sort';
import { Articulo03 } from './models/articulo03';
import { MatDialog } from '@angular/material/dialog';
import { DialogoarticuloComponent } from './dialogoarticulo/dialogoarticulo.component';

@Component({
	selector: 'app-ejemplo08',
	templateUrl: './ejemplo08.component.html',
	styleUrls: ['./ejemplo08.component.css']
})

export class Ejemplo08Component implements OnInit {

	//variables utilizadas en ejemplo01
	public columnas01: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];
	public datos01: Articulo[] = [new Articulo(1, 'papas', 55),
	new Articulo(2, 'manzana', 50),
	new Articulo(3, 'naranjas', 30),];
	// public articuloselect: Articulo = new Articulo(0,"",0);
	public articuloselect: Articulo = new Articulo(null, null, null);
	@ViewChild(MatTable) tabla1!: MatTable<Articulo>;

	//variables utilizadas en ejemplo02	
	public columnas02: string[] = ['codigo', 'descripcion', 'precio'];
	public datos02: Articulo02[] = [];
	public dataSource: any;
	public dataSource3: any;
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	//variables utilizadas en ejemplo03
	public columnas03: string[] = ['codigo', 'descripcion', 'precio'];
	public datos03: Articulo03[] = [];
	public dataSource1: any;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	//variable agregar articulo modo cuadro de dialogo, agregado a ejemplo01
	ds = new MatTableDataSource<Articulo>(this.datos01);

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
		for (let x = 1; x <= 100; x++) {
			this.datos02.push(new Articulo02(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
		}

		this.dataSource = new MatTableDataSource<Articulo02>(this.datos02);
		this.dataSource.paginator = this.paginator; //ejemplo02

		for (let x3 = 1; x3 <= 10; x3++) {
			this.datos03.push(new Articulo03(x3, `artículo ${x3}`, Math.trunc(Math.random() * 100)));
		}

		this.dataSource1 = new MatTableDataSource<Articulo02>(this.datos03);
		this.dataSource1.sort = this.sort; // ejemplo03

		this.dataSource3 = new MatTableDataSource(this.datos02);
	}

	//funciones utilizadas en ejemplo01	
	borrarFila(cod: number) {
		if (confirm("Realmente quiere borrarlo?")) {
			this.datos01.splice(cod, 1);
			this.tabla1.renderRows();
		}
	}

	agregar() {
		this.datos01.push(new Articulo(this.articuloselect.codigo, this.articuloselect.descripcion, this.articuloselect.precio));
		this.tabla1.renderRows();
		this.articuloselect = new Articulo(null, null, null);
	}

	//funcion buscar agregada al ejemplo02
	filtrar(event: Event) {
		const filtro = (event.target as HTMLInputElement).value;
		this.dataSource3.filter = filtro.trim().toLowerCase();
	}

	//funcion agregar articulo modo cuadro de dialogo, agregado a ejemplo01
	abrirDialogo() {
		const dialogo1 = this.dialog.open(DialogoarticuloComponent, {
			data: new Articulo(0, '', 0)
		});
		dialogo1.afterClosed().subscribe(art => {
			if (art != undefined)
				this.agregar();
		});
	}
}
