import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiServerURL = 'https://back-productossan.herokuapp.com';

  
  constructor(private httpClient: HttpClient) { }
  
  getProductosList(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.apiServerURL}`+'/Producto/buscarProductos');
  }

  createProducto(producto: Producto): Observable<Object>{
    return this.httpClient.post(`${this.apiServerURL}`+'/Producto/crearProducto',producto);
  }

  subirImagen(file: FormData):Observable<Object>{
    return this.httpClient.post(`${this.apiServerURL}`+'/Producto/subirImagen/',file);
  }

  getProductoId(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.apiServerURL}`+'/Producto/buscarProducto/'+`${id}`);
  }

  updateProducto(id: number, producto: Producto): Observable<Object>{
    return this.httpClient.put(`${this.apiServerURL}`+'/Producto/modificarProducto/'+`${id}`,producto);
  }

  modificarImagen(file: FormData, id: number):Observable<Object>{
    return this.httpClient.put(`${this.apiServerURL}`+'/Producto/modificarImagen/'+`${id}`,file);
  }

  deleteProducto(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.apiServerURL}`+'/Producto/borrarProducto/'+`${id}`);
  }
}
