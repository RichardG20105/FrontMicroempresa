import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { AlertifyService } from "./alertify.service";

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor{

    constructor(private alertify: AlertifyService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler){
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error);
                    const errorMessage = this.setError(error);
                    this.alertify.error(errorMessage);
                    return throwError(errorMessage);
                })
            );
    }

    setError(error: HttpErrorResponse): string{
        let errorMessage = 'Ocurrio un error desconocido';
        if(error.error instanceof ErrorEvent){
            // Error en el lado del Cliente
            errorMessage = error.error.message;
        }else{
            // Error en el lado del Servidor
            if(error.status !== 0){
                errorMessage = error.error.message;
            }
        }
        return errorMessage;
    }
}