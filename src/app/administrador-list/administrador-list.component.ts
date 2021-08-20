import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service'; 

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
    /*this.dialogService.abrirDialogoConfirmacion('¿Desea Borrar este Administrador?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.administradorServicio.deleteAdministrador(id).subscribe(data => {
          console.log(data);
          this.getAdministradores();
        });
      }
    });*/
    if(confirm('Desea eliminar el Administrador?')){
      this.administradorServicio.deleteAdministrador(id).subscribe(data => {
        this.getAdministradores();
      });
    }
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
