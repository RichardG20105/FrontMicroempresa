import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puntoventa } from '../puntoventa'
import { PuntoventaService } from '../puntoventa.service';

@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

  puntoventas!: Puntoventa[];

  constructor(private puntoventaService: PuntoventaService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPuntoVenta();
  }

  private getPuntoVenta(){
    this.puntoventaService.getPuntoVentaLista().subscribe(data => {
      this.puntoventas = data;
    });
  }

  updatePuntoventa(id: number){
    this.router.navigate(['update-puntoventa', id]);
  }

  deletePuntoventa(id: number){
    if(confirm('Desea eliminar el Punto de Venta?')){
      this.puntoventaService.deletePuntoventa(id).subscribe( data => {
        console.log(data);
        this.getPuntoVenta();
      });
    }
    
  }

  createPuntoventa(){
    this.router.navigate(['create-puntoventa']);
  }

}
