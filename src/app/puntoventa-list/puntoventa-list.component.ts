import { Component, OnInit } from '@angular/core';
import { Puntoventa } from '../puntoventa'
import { PuntoventaService } from '../puntoventa.service';

@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

  puntoventas!: Puntoventa[];

  constructor(private puntoventaService: PuntoventaService) { }

  ngOnInit(): void {
    this.getPuntoVenta();
  }

  private getPuntoVenta(){
    this.puntoventaService.getPuntoVentaLista().subscribe(data => {
      this.puntoventas = data;
    })
  }

}
