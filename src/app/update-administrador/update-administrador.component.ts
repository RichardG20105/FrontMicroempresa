import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-update-administrador',
  templateUrl: './update-administrador.component.html',
  styleUrls: ['./update-administrador.component.css']
})
export class UpdateAdministradorComponent implements OnInit {
  
  id!: number;
  administrador: Administrador = new Administrador();
  administradorForm!: FormGroup;
  administradorSubmit!: boolean;
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;
  
  constructor(
    private administradorServicio: AdministradorService,
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder,
    private alertify: AlertifyService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.administradorServicio.getAdministradorId(this.id).subscribe(data =>{
      this.administrador = data;
    }, error => console.log(error));
    this.CreateAdministradorForm();
  }
  
  CreateAdministradorForm(){
    this.administradorForm = this.fb.group({
      NombreAdministrador: [null, Validators.required],
      Usuario: [null, Validators.required],
      Contrasenia: [null, Validators.required]
    })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  onSubmit(){
    if(this.administradorForm.valid){
      this.administradorServicio.updateAdministrador(this.id, this.administrador).subscribe(data =>{
        console.log(data)
        this.alertify.success('Se modifico el Administrador')
        this.onReset()
        this.goToAdministradorList();
      }, error => console.log(error));
    }
    
  }

  goToAdministradorList(){
    this.router.navigate(['/administradores']);
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
