import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PuntoventaListComponent } from './puntoventa-list/puntoventa-list.component';
=======
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
>>>>>>> ff0b97753d3caa449af7917df2499b6a85ee076a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PuntoventaListComponent
=======
    AdministradorListComponent
>>>>>>> ff0b97753d3caa449af7917df2499b6a85ee076a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
