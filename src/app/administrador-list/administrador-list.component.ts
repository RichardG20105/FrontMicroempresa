import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service'; 
import { HttpErrorInterceptorService } from '../httperror-interceptor.service';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  administradores: Administrador[] = [];

  constructor(private administradorServicio: AdministradorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAdministradores();
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
          if(data){
            Swal.fire(
            'Eliminado!',
            'El administrador ha sido borrado',
            'success'
            )
          }
        });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado!',
          'El administrador no se ha borrado',
          'error'
        )
      }
    })
  }
  page = 1
  pageSize = 5
  pageSizeOptions = [5, 10, 20, 50, 100]
}
