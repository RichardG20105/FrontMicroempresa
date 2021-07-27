import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { CreateAdministradorComponent } from './create-administrador/create-administrador.component';
import { FormsModule } from '@angular/forms';
import { UpdateAdministradorComponent } from './update-administrador/update-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    PuntoventaListComponent,
    AdministradorListComponent,
    CreateAdministradorComponent,
    UpdateAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
