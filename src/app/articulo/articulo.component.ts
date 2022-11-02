import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  nombre = "Set Nuit";

  precio = 93649;
  
  medida = 28;

  colores = "Terra";


  constructor() { }

  ngOnInit(): void {
  }

  habilitacionCuadro=false;
  clienteRegistrado= false;
  textoRegistro="No hay nadie registrado";

  getRegistroCliente() {
    this.clienteRegistrado=false;
  }

  setClienteRegistrado(event:Event) {
  //alert("El cliente se acaba de registrar.")
    if ((<HTMLInputElement>event.target).value==="sí") {
      this.textoRegistro="El cliente se registró exitosamente";
  } else {
    this.textoRegistro="No hay nadie registrado";
  }
 }
}