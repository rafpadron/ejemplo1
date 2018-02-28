import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  codigo: String;

  constructor() { }

  ngOnInit() {
  }

  generaramdon(): String {
    return Math.floor( Math.random() * 255 ).toString(16);
  }

  colorhex(): String {
    this.codigo = '#' + this.generaramdon() + this.generaramdon() + this.generaramdon();
    return this.codigo;
  }
}
