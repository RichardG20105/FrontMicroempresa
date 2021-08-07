import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { CreatePuntoventaComponent } from './create-puntoventa/create-puntoventa.component';
import { UpdatePuntoventaComponent } from './update-puntoventa/update-puntoventa.component';
import { CreateAdministradorComponent } from './create-administrador/create-administrador.component';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
import { UpdateAdministradorComponent } from './update-administrador/update-administrador.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'administradores', component: AdministradorListComponent, canActivate:[AuthGuardService]},
  {path: 'crearAdministrador', component: CreateAdministradorComponent, canActivate:[AuthGuardService]},
  {path: 'actualizarAdministrador/:id',component:UpdateAdministradorComponent, canActivate:[AuthGuardService]},
  {path: 'puntoventas', component: PuntoventaListComponent, canActivate:[AuthGuardService]},
  {path: 'create-puntoventa', component: CreatePuntoventaComponent, canActivate:[AuthGuardService]},
  {path: 'update-puntoventa/:id', component: UpdatePuntoventaComponent, canActivate:[AuthGuardService]},
  {path: 'productos', component:ProductoListComponent, canActivate:[AuthGuardService]},
  {path: 'create-producto', component:CreateProductoComponent, canActivate:[AuthGuardService]},
  {path: 'update-producto/:id',component:UpdateProductoComponent, canActivate:[AuthGuardService]},
  {path: 'login', component:LoginComponent},
  {path: 'logout',component:LogoutComponent, canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'administradores', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
