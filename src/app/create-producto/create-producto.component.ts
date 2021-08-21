import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  producto: Producto = new Producto();
  imagenSeleccionada!: File;
  productoForm!: FormGroup;
  productoSubmit!: boolean;

  constructor(private productoService: ProductoService,
    private router: Router, private fb: FormBuilder, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.CreateProductoForm();
  }
  CreateProductoForm(){
    this.productoForm = this.fb.group({
        NombreProducto: [null, Validators.required],
        FotoProducto: [null, Validators.required]
    })
  }
  onSubmit(){
    console.log(this.producto);
    this.productoSubmit = true
    if(this.productoForm.valid){
      this.saveProducto();
    }
  }
  
  onReset(){
    this.productoSubmit = false;
    this.productoForm.reset();
  }

  saveProducto(){
    const imagenSubir = new FormData();
    imagenSubir.append('file',this.imagenSeleccionada);
    this.productoService.subirImagen(imagenSubir).subscribe(data =>{
      console.log(data);
    },error => console.log(error));

    this.productoService.createProducto(this.producto).subscribe(data =>{
      console.log(data);
      this.onReset();
      this.alertify.success('Producto Registrado')
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

  get NombreProducto(){
    return this.productoForm.get('NombreProducto') as FormControl;
  }
  get FotoProducto(){
    return this.productoForm.get('FotoProducto') as FormControl;
  }
}
