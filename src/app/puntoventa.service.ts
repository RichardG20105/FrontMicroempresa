import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Puntoventa } from './puntoventa';

@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  private baseURL = "http://localhost:8080/PuntoVenta/buscarPuntoVenta";

  constructor(private httpClient: HttpClient) { }

  getPuntoVentaLista(): Observable<Puntoventa[]>{
    return this.httpClient.get<Puntoventa[]>(`${this.baseURL}`);
  }

}
