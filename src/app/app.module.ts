import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { CreatePuntoventaComponent } from './create-puntoventa/create-puntoventa.component';
import { UpdatePuntoventaComponent } from './update-puntoventa/update-puntoventa.component';
import { CreateAdministradorComponent } from './create-administrador/create-administrador.component';
import { UpdateAdministradorComponent } from './update-administrador/update-administrador.component';
import { LoginComponent } from './login/login.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PuntoventaListComponent,
    AdministradorListComponent,
    CreatePuntoventaComponent,
    UpdatePuntoventaComponent,
    CreateAdministradorComponent,
    UpdateAdministradorComponent,
    LoginComponent,
    ProductoListComponent,
    CreateProductoComponent,
    UpdateProductoComponent,
    LogoutComponent,
    HeaderComponent,
    DialogoConfirmacionComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[DialogoConfirmacionComponent]
})
export class AppModule { }
