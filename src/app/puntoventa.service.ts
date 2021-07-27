import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Puntoventa } from './puntoventa';

@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  private baseURL = "http://localhost:8080/PuntoVenta/";
  constructor(private httpClient: HttpClient) { }

  getPuntoVentaLista(): Observable<Puntoventa[]>{
    return this.httpClient.get<Puntoventa[]>(`${this.baseURL}`+'buscarPuntoVenta');
  }

  createPuntoVenta(puntoventa: Puntoventa): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'crearPuntoVenta', puntoventa);
  }

  getPuntoventaId(id: number): Observable<Puntoventa>{
    return this.httpClient.get<Puntoventa>(`${this.baseURL}`+'buscarPuntoVentaId/'+`${id}`);
  }

  updatePuntoventa(id: number, puntoventa: Puntoventa): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'modificarPuntoVenta/'+`${id}`, puntoventa);
  }

  deletePuntoventa(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'borrarPuntoVenta/'+`${id}`);
  }

}
