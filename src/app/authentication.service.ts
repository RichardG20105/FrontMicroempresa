import { Injectable } from '@angular/core';
import { Administrador } from './administrador';
import { AdministradorService } from './administrador.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(private administradorService: AdministradorService) { }

  aunthenticate(usuario: string, contrasenia: string){
    if(this.administradorService.getAdministradorSesion(usuario, contrasenia)){
      sessionStorage.setItem('usuario', usuario);
      return true;
    } else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('usuario')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('usuario')
  }
}
