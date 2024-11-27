import { Component } from '@angular/core';
import { Usuario } from '../module/usuario';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService){

  }

  fazerLogin(){
    this.loginService.fazerLogin(this.usuario);
  }

}
