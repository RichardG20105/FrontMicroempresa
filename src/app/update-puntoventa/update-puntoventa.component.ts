import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { Puntoventa } from '../puntoventa';
import { PuntoventaService } from '../puntoventa.service';

@Component({
  selector: 'app-update-puntoventa',
  templateUrl: './update-puntoventa.component.html',
  styleUrls: ['./update-puntoventa.component.css']
})
export class UpdatePuntoventaComponent implements OnInit {

  id!: number;
  puntoventa: Puntoventa = new Puntoventa();
  puntoVentaForm!: FormGroup;
  puntoVentaSubmit!: boolean;

  constructor(
    private puntoventaService: PuntoventaService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private alertify: AlertifyService  
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.puntoventaService.getPuntoventaId(this.id).subscribe(data => {
      this.puntoventa = data;
    }, error => console.log(error));
    this.CreatePuntoVentaForm();
  }

  CreatePuntoVentaForm(){
    this.puntoVentaForm = this.fb.group({
      NombrePventa: [null,Validators.required],
      DireccionPventa: [null, Validators.required],
      CiudadPventa: [null, Validators.required]
    })
  }
  
  onSubmit(){
    this.puntoVentaSubmit = true;
    if(this.puntoVentaForm.valid){
      this.puntoventaService.updatePuntoventa(this.id, this.puntoventa).subscribe( data =>{
        this.onReset();
        this.alertify.success('Punto de venta modificado')
        this.goToPuntoventaList();
      },error => console.log(error));
    }
    
  }

  goToPuntoventaList(){
    this.router.navigate(['/puntoventas']);
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