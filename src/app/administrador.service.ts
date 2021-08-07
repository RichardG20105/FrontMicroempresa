import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Administrador } from './administrador';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  
  private baseUrl = "http://localhost:8080/Administrador/";

  constructor( private httpClient: HttpClient) { }

  getAdministradoresList(): Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(`${this.baseUrl}`+'buscarAdministrador');
  }

  createAdministrador(administrador: Administrador): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+'crearAdministrador',administrador);
  }

  getAdministradorId(id: number): Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.baseUrl}`+'buscarAdministrador/'+`${id}`);
  }

  getAdministradorSesion(usuario: String,contrasenia: String): Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.baseUrl}`+'comprobarSesion/'+`${usuario}`+'/'+`${contrasenia}`);
  }

  updateAdministrador(id: number, administrador: Administrador): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`+'modificarAdministrador/'+`${id}`,administrador);
  }

  deleteAdministrador(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}`+'borrarAdministrador/'+`${id}`);
  }
}
