import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;
  contrasenia!: string;
  constructor(private login: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.login.aunthenticate(this.usuario, this.contrasenia)
  }
}
