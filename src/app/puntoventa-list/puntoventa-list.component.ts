import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Puntoventa } from '../puntoventa'
import { PuntoventaService } from '../puntoventa.service';

@Component({
  selector: 'app-puntoventa-list',
  templateUrl: './puntoventa-list.component.html',
  styleUrls: ['./puntoventa-list.component.css']
})
export class PuntoventaListComponent implements OnInit {

  puntoventas: Puntoventa[] = [];

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

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
