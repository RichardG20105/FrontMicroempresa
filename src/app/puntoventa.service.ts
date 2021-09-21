import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Puntoventa } from './puntoventa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  private baseURL = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getPuntoVentaLista(): Observable<Puntoventa[]>{
    return this.httpClient.get<Puntoventa[]>(`${this.baseURL}`+'/PuntoVenta/buscarPuntoVenta');
  }

  createPuntoVenta(puntoventa: Puntoventa): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/PuntoVenta/crearPuntoVenta', puntoventa);
  }

  getPuntoventaId(id: number): Observable<Puntoventa>{
    return this.httpClient.get<Puntoventa>(`${this.baseURL}`+'/PuntoVenta/buscarPuntoVentaId/'+`${id}`);
  }

  updatePuntoventa(id: number, puntoventa: Puntoventa): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/PuntoVenta/modificarPuntoVenta/'+`${id}`, puntoventa);
  }

  deletePuntoventa(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'/PuntoVenta/borrarPuntoVenta/'+`${id}`);
  }

}
