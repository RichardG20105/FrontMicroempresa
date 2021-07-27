import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { CreatePuntoventaComponent } from './create-puntoventa/create-puntoventa.component';
import { UpdatePuntoventaComponent } from './update-puntoventa/update-puntoventa.component';
import { CreateAdministradorComponent } from './create-administrador/create-administrador.component';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
import { UpdateAdministradorComponent } from './update-administrador/update-administrador.component';

const routes: Routes = [
  {path: 'administradores', component: AdministradorListComponent},
  {path: 'crearAdministrador', component: CreateAdministradorComponent},
  {path: 'actualizarAdministrador/:id',component:UpdateAdministradorComponent},
  {path: 'puntoventas', component: PuntoventaListComponent},
  {path: 'create-puntoventa', component: CreatePuntoventaComponent},
  {path: 'update-puntoventa/:id', component: UpdatePuntoventaComponent},
  {path: '', redirectTo: 'administradores', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
