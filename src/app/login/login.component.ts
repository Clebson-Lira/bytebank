import { Component, OnInit } from '@angular/core';
import { Usuario } from '../module/usuario';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  fazerLogin() {
    this.loginService.fazerLogin(this.usuario);
  }
}
