import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  nombre = "Set Nuit";

  precio = 93649;
  
  medida = 28;

  colores = "Terra";


  constructor() { }

  ngOnInit(): void {
  }

}
