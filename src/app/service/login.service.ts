import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../module/usuario';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private modalService: ModalService) {}

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'clebson' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['nova-transferencia']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.modalService.openModal('Login inválido! Verifique Usuário e senha!', false, 'xl');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
