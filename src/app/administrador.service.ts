import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Administrador } from './administrador';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private baseUrl = environment.apiBaseUrl;

  constructor( private httpClient: HttpClient) { }

  getAdministradoresList(): Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(`${this.baseUrl}`+'/Administrador/buscarAdministrador');
  }

  createAdministrador(administrador: Administrador): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+'/Administrador/crearAdministrador',administrador);
  }

  getAdministradorId(id: number): Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.baseUrl}`+'/Administrador/buscarAdministradorId/'+`${id}`);
  }

  getAdministradorSesion(usuario: string,contrasenia: string): Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.baseUrl}`+'/Administrador/accesoLogin/'+`${usuario}`+'/'+`${contrasenia}`);    
  }

  updateAdministrador(id: number, administrador: Administrador): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`+'/Administrador/modificarAdministrador/'+`${id}`,administrador);
  }

  deleteAdministrador(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}`+'/Administrador/borrarAdministrador/'+`${id}`);
  }
}
