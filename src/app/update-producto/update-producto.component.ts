import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent implements OnInit {

  producto: Producto = new Producto();
  imagenSeleccionada!: File;
  id!: number;
  constructor(private productoService: ProductoService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductoId(this.id).subscribe(data => {
      this.producto = data;
    }, error => console.log(error));
  }

  onFileChanged(event: any){
    this.imagenSeleccionada = event.target.files[0];

    this.producto.fotoProducto = this.imagenSeleccionada.name;
  }

  onSubmit(){
    console.log(this.producto);
    this.updateProducto();
  }

  updateProducto(){
    const imagenSubir = new FormData();
    imagenSubir.append('file',this.imagenSeleccionada);
    this.productoService.modificarImagen(imagenSubir, this.id).subscribe(data =>{

    },error => console.log(error));

    this.productoService.updateProducto(this.id, this.producto).subscribe(data => {
      this.goToProductoList();
    }, error => console.log(error));
  }

  goToProductoList(){
    this.router.navigate(['productos']);
  }
}
