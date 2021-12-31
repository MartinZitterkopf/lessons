import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevodado',
  templateUrl: './nuevodado.component.html',
  styleUrls: ['./nuevodado.component.css']
})
export class NuevodadoComponent implements OnInit {

  @Input() public valor: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
