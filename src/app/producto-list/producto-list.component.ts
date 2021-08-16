import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos!: Producto[];
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
}
