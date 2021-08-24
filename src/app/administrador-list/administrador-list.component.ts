import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service'; 

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  administradores: Administrador[] = [];

fieldTextType!: boolean;
  repeatFieldTextType!: boolean;
  constructor(private administradorServicio: AdministradorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAdministradores();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  private getAdministradores(){
    this.administradorServicio.getAdministradoresList().subscribe(data => {
      this.administradores = data;
    });
  }

  createAdministrador(){
    this.router.navigate(['crearAdministrador']);
  }
  updateAdministrador(id: number){
    this.router.navigate(['actualizarAdministrador',id]);
  }

  deleteAdministrador(id: number){ 
    Swal.fire({
      title: 'Esta seguro?',
      text: 'No podra recuperar la información despues',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'No, dejalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.administradorServicio.deleteAdministrador(id).subscribe(data => {
          this.getAdministradores();
        });
        Swal.fire(
          'Borrado!',
          'El administrador a sido borrado',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado!',
          'El administrador no se a borrado',
          'error'
        )
      }
    })
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
