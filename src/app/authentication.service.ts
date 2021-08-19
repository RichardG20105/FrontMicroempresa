import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from './administrador';
import { AdministradorService } from './administrador.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  res = false
  constructor(private administradorService: AdministradorService, private router: Router) { }

  aunthenticate(usuario: string, contrasenia: string){
    this.administradorService.getAdministradorSesion(usuario, contrasenia).subscribe(data =>{
      sessionStorage.setItem('usuario', data.usuario)
      this.habilitar();
    },
    error => console.log(error))
    console.log(sessionStorage)
  }
  
  habilitar(){
    this.router.navigate(['']);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('usuario')
    return !(user === null)
  }
  logOut(){
    sessionStorage.removeItem('usuario')
  }
}
