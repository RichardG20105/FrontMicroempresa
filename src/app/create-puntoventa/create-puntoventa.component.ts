import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puntoventa } from '../puntoventa';
import { PuntoventaService } from '../puntoventa.service';

@Component({
  selector: 'app-create-puntoventa',
  templateUrl: './create-puntoventa.component.html',
  styleUrls: ['./create-puntoventa.component.css']
})
export class CreatePuntoventaComponent implements OnInit {

  puntoventa: Puntoventa = new Puntoventa(); 
  constructor(private puntoventaService: PuntoventaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePuntoventa(){
    this.puntoventaService.createPuntoVenta(this.puntoventa).subscribe( data =>{
      console.log(data);
      this.goToPuntoventaList();
    },
    error => console.log(error));
  }

  goToPuntoventaList(){
    this.router.navigate(['/puntoventas']);
  }

  onSubmit(){
    console.log(this.puntoventa);
    this.savePuntoventa();
  }

}
