import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
@Injectable({
  providedIn: 'root'
})
export class DialogoService {

  constructor(private dialog: MatDialog) { }

  abrirDialogoConfirmacion(msg: any){
    return this.dialog.open(DialogoConfirmacionComponent,{
      width :'390px',
      panelClass: 'confirm-dialog-container',
      disableClose:true,
      position: {top: "10px"},
      data: {
        message: msg
      }
    });
  }
}
