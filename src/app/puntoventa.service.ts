import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Puntoventa } from './puntoventa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  private apiServerURL = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getPuntoVentaLista(): Observable<Puntoventa[]>{
    return this.httpClient.get<Puntoventa[]>(`${this.apiServerURL}`+'/PuntoVenta/buscarPuntoVenta');
  }

  createPuntoVenta(puntoventa: Puntoventa): Observable<Object>{
    return this.httpClient.post(`${this.apiServerURL}`+'/PuntoVenta/crearPuntoVenta', puntoventa);
  }

  getPuntoventaId(id: number): Observable<Puntoventa>{
    return this.httpClient.get<Puntoventa>(`${this.apiServerURL}`+'/PuntoVenta/buscarPuntoVentaId/'+`${id}`);
  }

  updatePuntoventa(id: number, puntoventa: Puntoventa): Observable<Object>{
    return this.httpClient.put(`${this.apiServerURL}`+'/PuntoVenta/modificarPuntoVenta/'+`${id}`, puntoventa);
  }

  deletePuntoventa(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.apiServerURL}`+'/PuntoVenta/borrarPuntoVenta/'+`${id}`);
  }

}
