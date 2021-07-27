import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { CreateAdministradorComponent } from './create-administrador/create-administrador.component';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
import { UpdateAdministradorComponent } from './update-administrador/update-administrador.component';

const routes: Routes = [
  {path: 'administradores', component: AdministradorListComponent},
  {path: 'crearAdministrador', component: CreateAdministradorComponent},
  {path: 'actualizarAdministrador/:id',component:UpdateAdministradorComponent},
  {path: 'puntoventas', component: PuntoventaListComponent},
  {path: '', redirectTo: 'administradores', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
