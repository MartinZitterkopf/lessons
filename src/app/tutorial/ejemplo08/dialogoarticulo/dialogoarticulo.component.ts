import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Articulo } from '../models/articulo';

@Component({
	selector: 'app-dialogoarticulo',
	templateUrl: './dialogoarticulo.component.html',
	styleUrls: ['./dialogoarticulo.component.css']
})
export class DialogoarticuloComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<DialogoarticuloComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Articulo) { }

	ngOnInit(): void {
	}

	cancelar() {
		this.dialogRef.close();
	}
}
