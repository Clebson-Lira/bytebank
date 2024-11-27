import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTranferenciaComponent } from './nova-tranferencia/nova-tranferencia.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path:'extrato', component: ExtratoComponent, canActivate:[LoginGuard]},
 // {path:'extrato/:id', component: DetailsComponent, canActivate:[LoginGuard]},
  {path:'nova-transferencia', component: NovaTranferenciaComponent, canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
