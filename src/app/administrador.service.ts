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
    return this.httpClient.get<Administrador[]>(`${this.baseUrl}`+'/buscarAdministrador');
  }
}
