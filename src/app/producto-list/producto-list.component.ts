import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
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
    if(confirm('Desea eliminar el Producto?')){
      this.productoService.deleteProducto(id).subscribe(data => {
        console.log(data);
        this.getProductos();
      });
    }
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
