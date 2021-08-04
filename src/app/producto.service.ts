import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = "http://localhost:8080/Producto/";

  
  constructor(private httpClient: HttpClient) { }
  
  getProductosList(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseUrl}`+'buscarProductos');
  }

  createProducto(producto: Producto): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+'crearProducto',producto);
  }

  subirImagen(file: FormData):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+'subirImagen',file);
  }

  getProductoId(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseUrl}`+'buscarProducto/'+`${id}`);
  }

  updateProducto(id: number, producto: Producto): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`+'modificarProducto/'+`${id}`,producto);
  }

  modificarImagen(file: FormData, id: number):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`+'modificarImagen/'+`${id}`,file);
  }

  deleteProducto(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}`+'borrarProducto/'+`${id}`);
  }
}
