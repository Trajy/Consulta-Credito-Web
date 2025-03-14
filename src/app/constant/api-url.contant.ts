import { environment } from "../../environments/environment"

export const CONSULTA_CADASTRO_API_URLS = {
    findByNumeroCredito: `${environment.apiBaseUrl}/creditos/credito`,
    findByNumeroNfse: `${environment.apiBaseUrl}/creditos`
}
