import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
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
  productoForm!: FormGroup;
  productoSubmit!: boolean;
  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.CreateProductoForm();
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductoId(this.id).subscribe(data => {
      this.producto = data;
    }, error => console.log(error));
  }

  CreateProductoForm(){
    this.productoForm = this.fb.group({
        NombreProducto: [null, Validators.required],
        FotoProducto: [null, Validators.required]
    })
  }

  onFileChanged(event: any){
    this.imagenSeleccionada = event.target.files[0];

    this.producto.fotoProducto = this.imagenSeleccionada.name;
  }

  onSubmit(){
    console.log(this.producto);
    this.productoSubmit = true
    if(this.productoForm.valid){
      this.updateProducto();
    }
  }

  onReset(){
    this.productoSubmit = false;
    this.productoForm.reset();
  }

  updateProducto(){
    const imagenSubir = new FormData(); 
    if(this.imagenSeleccionada){
      imagenSubir.append('file',this.imagenSeleccionada);
      this.productoService.modificarImagen(imagenSubir, this.id).subscribe(data =>{

      },error => console.log(error));
    }
    this.productoService.updateProducto(this.id, this.producto).subscribe(data => {
      this.onReset();
      this.alertify.success('Producto Registrado')
      this.goToProductoList();
    }, error => console.log(error));
  }

  goToProductoList(){
    this.router.navigate(['productos']);
  }

  get NombreProducto(){
    return this.productoForm.get('NombreProducto') as FormControl;
  }
  get FotoProducto(){
    return this.productoForm.get('FotoProducto') as FormControl;
  }
}
