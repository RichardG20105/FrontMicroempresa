import { Component, OnInit } from '@angular/core';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service'; 

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  administradores!: Administrador[];

  constructor(private administradorServicio: AdministradorService) { }

  ngOnInit(): void {
    this.getAdministradores();
  }

  private getAdministradores(){
    this.administradorServicio.getAdministradoresList().subscribe(data => {
      this.administradores = data;
    });
  }

}
