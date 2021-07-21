import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';

const routes: Routes = [
  {path: 'administradores', component: AdministradorListComponent},
  {path: 'puntoventas', component: PuntoventaListComponent},
  {path: '', redirectTo: 'administradores', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
