import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-newdado',
	templateUrl: './newdado.component.html',
	styleUrls: ['./newdado.component.css']
})
export class NewdadoComponent implements OnInit {
	
	@Input() valor:number=1;

	constructor() { }

	ngOnInit(): void {
	}

}
