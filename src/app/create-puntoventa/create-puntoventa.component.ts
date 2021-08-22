import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { Puntoventa } from '../puntoventa';
import { PuntoventaService } from '../puntoventa.service';

@Component({
  selector: 'app-create-puntoventa',
  templateUrl: './create-puntoventa.component.html',
  styleUrls: ['./create-puntoventa.component.css']
})
export class CreatePuntoventaComponent implements OnInit {

  puntoventa: Puntoventa = new Puntoventa(); 
  puntoVentaForm!: FormGroup;
  puntoVentaSubmit!: boolean;

  constructor(
    private puntoventaService: PuntoventaService,
    private router: Router,
    private fb: FormBuilder,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.CreatePuntoVentaForm();
  }

  CreatePuntoVentaForm(){
    this.puntoVentaForm = this.fb.group({
      NombrePventa: [null,Validators.required],
      DireccionPventa: [null, Validators.required],
      CiudadPventa: [null, Validators.required]
    })
  }
  savePuntoventa(){
    this.puntoventaService.createPuntoVenta(this.puntoventa).subscribe( data =>{
      console.log(data);
      this.onReset();
      this.alertify.success('Punto de venta creado')
      this.goToPuntoventaList();
    },
    error => console.log(error));
  }

  goToPuntoventaList(){
    this.router.navigate(['/puntoventas']);
  }

  onSubmit(){
    console.log(this.puntoventa);
    this.puntoVentaSubmit = true;
    if(this.puntoVentaForm.valid){
      this.savePuntoventa();
    }
  }

  onReset(){
    this.puntoVentaSubmit = false;
    this.puntoVentaForm.reset();
  }

  get NombrePventa(){
    return this.puntoVentaForm.get('NombrePventa') as FormControl;
  }

  get DireccionPventa(){
    return this.puntoVentaForm.get('DireccionPventa') as FormControl;
  }

  get CiudadPventa(){
    return this.puntoVentaForm.get('CiudadPventa') as FormControl;
  }
}
