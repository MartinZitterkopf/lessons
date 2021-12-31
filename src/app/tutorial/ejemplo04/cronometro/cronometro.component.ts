import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-cronometro',
	templateUrl: './cronometro.component.html',
	styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit, OnDestroy {
	private intervalo: any;

	public segundos: number = 0;
	@Input() inicio: number = 0;
	@Output() multiplo10: EventEmitter<number> = new EventEmitter<number>();

	//--------------------------------------------------------------------------------------

	constructor() {
	}

	ngOnInit(): void {
		this.segundos = this.inicio;

		const funcionAnonima: Function = () => {
			this.segundos++;
			if (this.segundos % 10 == 0) {
				this.multiplo10.emit(this.segundos);
			}
		};

		const tiempo: number = 1000;

		// se ejecuta infinitamente
		setInterval(funcionAnonima, tiempo);
		// this.intervalo = setInterval(this.funcionAumentarContador.bind(this), tiempo);

		// se ejecuta solo 1 vex
		// setTimeout(funcionAnonima, tiempo);
	}

	ngOnDestroy(): void {
		// throw new Error('Method not implemented.');
	}

	//--------------------------------------------------------------------------------------

	private funcionAumentarContador(): void {
		this.segundos++;
		if (this.segundos % 10 == 0) {
			this.multiplo10.emit(this.segundos);
		}
	}

	public limiarIntervalo(): void {
		clearInterval(this.intervalo);
	}


	//--------------------------------------------------------------------------------------

}
