import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credito } from '../../model/credito.model';
import { CONSULTA_CADASTRO_API_URLS } from '../../constant/api-url.contant';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreditoService {

    constructor(private readonly httpCLient: HttpClient) { }

    public getCreditosByNfse(numeroNfse: string): Observable<Credito[]> {
        return this.httpCLient.get<Credito[]>(`${CONSULTA_CADASTRO_API_URLS.findByNumeroNfse}/${numeroNfse}`);
    }

    public getByNumeroCredito(numeroCredito: string): Observable<Credito> {
        return this.httpCLient.get<Credito>(`${CONSULTA_CADASTRO_API_URLS.findByNumeroCredito}/${numeroCredito}`);
    }

}
