import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Esta seguro?',
      text: 'No podra recuperar la informacion despues',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'No, dejalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.puntoventaService.deletePuntoventa(id).subscribe( data => {
          console.log(data);
          this.getPuntoVenta();
        });
        Swal.fire(
          'Borrado!',
          'El punto de venta a sido borrado',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado!',
          'El punto de venta no se a borrado',
          'error'
        )
      }
    })    
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
