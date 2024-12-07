import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
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
