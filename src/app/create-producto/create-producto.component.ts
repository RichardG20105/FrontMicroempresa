import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  producto: Producto = new Producto();
  imagenSeleccionada!: File;
  constructor(private productoService: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(){
    console.log(this.producto);
    this.saveProducto();
  }

  saveProducto(){
    const imagenSubir = new FormData();
    imagenSubir.append('file',this.imagenSeleccionada);
    this.productoService.subirImagen(imagenSubir).subscribe(data =>{
      console.log(data);
    },error => console.log(error));

    this.productoService.createProducto(this.producto).subscribe(data =>{
      console.log(data);
      this.goToProductoList();
    },error => console.log(error)); 
  }

  goToProductoList(){
    this.router.navigate(['productos']);
  }

  onFileChanged(event: any){
    this.imagenSeleccionada = event.target.files[0];

    this.producto.fotoProducto = this.imagenSeleccionada.name;
  }
}
