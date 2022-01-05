import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public title: string = 'proyecto tutorial';

	constructor(
		private router: Router
	) {
		console.log("Se inicio app-component");

	}

	// public irEjemplo01(): void {
	// 	this.router.navigate(['/ejemplo01']);
	// }

	// public irEjemplo02(): void {
	// 	this.router.navigate(['/ejemplo02']);
	// }

	public irA(path: string): void {
		this.router.navigate(['/' + path]);
	}
}
