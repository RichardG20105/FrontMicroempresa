import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private puntoventaService: PuntoventaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.puntoventaService.getPuntoventaId(this.id).subscribe(data => {
      this.puntoventa = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.puntoventaService.updatePuntoventa(this.id, this.puntoventa).subscribe( data =>{
      this.goToPuntoventaList();
    }
    , error => console.log(error));
  }

  goToPuntoventaList(){
    this.router.navigate(['/puntoventas']);
  }

}