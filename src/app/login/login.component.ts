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
  constructor(private login: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.login.aunthenticate(this.usuario, this.contrasenia)
  }

  checkSession(){
    let user = sessionStorage.getItem('usuario')
    if(user != null){
      this.route.navigate(['']);
    }
  }
}
