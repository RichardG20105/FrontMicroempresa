import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-create-administrador',
  templateUrl: './create-administrador.component.html',
  styleUrls: ['./create-administrador.component.css']
})
export class CreateAdministradorComponent implements OnInit {

  administrador: Administrador = new Administrador();
  administradorForm!: FormGroup;
  administradorSubmit!: boolean;
  
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;

  constructor(
    private administradorServicio: AdministradorService,
    private router: Router, 
    private fb: FormBuilder,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.CreateAdministradorForm();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  CreateAdministradorForm(){
    this.administradorForm = this.fb.group({
      NombreAdministrador: [null, Validators.required],
      Usuario: [null, Validators.required],
      Contrasenia: [null, Validators.required]
    })
  }
  saveAdministrador(){
    this.administradorServicio.createAdministrador(this.administrador).subscribe(data =>{
      this.onReset();
      this.alertify.success('Administrador creado')
      this.goToAdministradorList();
    },
    error => console.log(error));
  }

  goToAdministradorList(){
    this.router.navigate(['administradores']);
  }
  
  onSubmit(){
    this.administradorSubmit = true
    if(this.administradorForm.valid){
      this.saveAdministrador();
    }    
  }
  
  onReset(){
    this.administradorSubmit = false;
    this.administradorForm.reset();
  }
  get NombreAdministrador(){
    return this.administradorForm.get('NombreAdministrador') as FormControl;
  }

  get Usuario(){
    return this.administradorForm.get('Usuario') as FormControl;
  }

  get Contrasenia(){
    return this.administradorForm.get('Contrasenia') as FormControl;
  }
}
