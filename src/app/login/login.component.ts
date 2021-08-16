import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: String;
  contrasenia!: String;
  invalidLogin = false;
  constructor(private router: Router, private login: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if(this.login.aunthenticate(this.usuario, this.contrasenia) === true){
      this.invalidLogin = false
      this.router.navigate([''])
    }
    this.invalidLogin = true
  }
}
