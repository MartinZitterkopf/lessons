import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico2',
  templateUrl: './selectornumerico2.component.html',
  styleUrls: ['./selectornumerico2.component.css']
})
export class Selectornumerico2Component implements OnInit {
  @Input() minimo: number=1;
  @Input() maximo: number=1;
  actual: number=1;
  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual<this.maximo)
      this.actual++;
  }

  decrementar() {
    if (this.actual>this.minimo)
      this.actual--;
  }  

  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }
}