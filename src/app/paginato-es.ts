import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl{
    constructor(){
        super();
    }
    itemsPerPageLabel = 'Cantidad por Pagina:'; 
    nextPageLabel     = 'Página siguiente';
    previousPageLabel = 'Página anterior';
    firstPageLabel = 'Primera página';
    lastPageLabel = 'Ultima página';

    getRangeLabel = (page: number, pageSize: number, length: number) => {
        if(length === 0 || pageSize === 0){
            return `0 / ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize,length): startIndex + pageSize
        return `${startIndex + 1} - ${endIndex} de ${length}`;
    }
}