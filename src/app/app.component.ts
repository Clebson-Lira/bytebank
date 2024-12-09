import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Adicionado
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CommonModule] // Adicionado
})
export class AppComponent {
  title = 'bytebank';

  mostrarMenu: boolean = false;
  mostrarFooter: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
}
