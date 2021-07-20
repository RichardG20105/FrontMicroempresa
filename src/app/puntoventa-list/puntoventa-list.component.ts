import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../puntoventa'

@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

  puntoventas!: Puntoventa[];

  constructor() { }

  ngOnInit(): void {
    this.puntoventas = [{
      "idPventa": 1,
      "nombrePventa": "Dicosavi",
      "direccionPventa": "5 de Junio",
      "ciudadPventa": "Riobamba"
    },
    {
      "idPventa": 2,
      "nombrePventa": "Camari",
      "direccionPventa": "Tarqui",
      "ciudadPventa": "Riobamba"
    }];
  }

}
