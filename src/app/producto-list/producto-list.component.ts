import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];
  constructor(private productoService: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
  }

  private getProductos(){
    this.productoService.getProductosList().subscribe(data =>{
      this.productos = data;
    });
  }

  createProducto(){
    this.router.navigate(['create-producto']);
  }

  updateProducto(id: number){
    this.router.navigate(['update-producto',id]);
  }

  deleteProducto(id: number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'No podra recuperar la informacion despues',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'No, dejalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.deleteProducto(id).subscribe(data => {
          console.log(data);
          this.getProductos();
        });
        Swal.fire(
          'Borrado!',
          'El producto a sido borrado',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado!',
          'El producto no se a borrado',
          'error'
        )
      }
    })
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
