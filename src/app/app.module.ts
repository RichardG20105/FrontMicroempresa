import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { PaginatePipe } from './pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './paginato-es';

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
    SideNavComponent,
    ToolbarComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[]
})
export class AppModule { }
