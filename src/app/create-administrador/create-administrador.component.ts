import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-create-administrador',
  templateUrl: './create-administrador.component.html',
  styleUrls: ['./create-administrador.component.css']
})
export class CreateAdministradorComponent implements OnInit {

  administrador: Administrador = new Administrador();
  constructor(private administradorServicio: AdministradorService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  saveAdministrador(){
    this.administradorServicio.createAdministrador(this.administrador).subscribe(data =>{
      console.log(data);
      this.goToAdministradorList();
    },
    error => console.log(error));
  }

  goToAdministradorList(){
    this.router.navigate(['administradores']);
  }
  
  onSubmit(){
    console.log(this.administrador);
    this.saveAdministrador();
  }
}
