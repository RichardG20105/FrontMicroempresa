import { Component, OnInit } from '@angular/core';
import { Administrador } from '../administrador';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  administradores!: Administrador[];

  constructor() { }

  ngOnInit(): void {
  }

}
