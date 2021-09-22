import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Administrador } from './administrador';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private apiServerURL = 'https://back-productossan.herokuapp.com';

  constructor( private httpClient: HttpClient) { }

  getAdministradoresList(): Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(`${this.apiServerURL}/Administrador/buscarAdministrador`);
  }

  createAdministrador(administrador: Administrador): Observable<Object>{
    return this.httpClient.post(`${this.apiServerURL}/Administrador/crearAdministrador`,administrador);
  }

  getAdministradorId(id: number): Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.apiServerURL}/Administrador/buscarAdministradorId/${id}`);
  }

  getAdministradorSesion(usuario: string,contrasenia: string): Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.apiServerURL}/Administrador/accesoLogin/${usuario}/${contrasenia}`);    
  }

  updateAdministrador(id: number, administrador: Administrador): Observable<Object>{
    return this.httpClient.put(`${this.apiServerURL}/Administrador/modificarAdministrador/${id}`,administrador);
  }

  deleteAdministrador(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.apiServerURL}/Administrador/borrarAdministrador/${id}`);
  }
}
