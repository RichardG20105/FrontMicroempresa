import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service'; 

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  administradores!: Administrador[];

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
    this.administradorServicio.deleteAdministrador(id).subscribe(data => {
      console.log(data);
      this.getAdministradores();
    });
  }
}
