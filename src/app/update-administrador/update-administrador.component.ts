import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-update-administrador',
  templateUrl: './update-administrador.component.html',
  styleUrls: ['./update-administrador.component.css']
})
export class UpdateAdministradorComponent implements OnInit {
  
  id!: number;
  administrador: Administrador = new Administrador();
  constructor(private administradorServicio: AdministradorService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.administradorServicio.getAdministradorId(this.id).subscribe(data =>{
      this.administrador = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.administradorServicio.updateAdministrador(this.id, this.administrador).subscribe(data =>{
      this.goToAdministradorList();
    }, error => console.log(error));
  }

  goToAdministradorList(){
    this.router.navigate(['/administradores']);
  }
}
