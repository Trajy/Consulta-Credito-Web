import { Routes } from '@angular/router';
import { ConsultaCreditoComponent } from './component/consulta-credito/consulta-credito.component';
import { ConsultaNfseComponent } from './component/consulta-nfse/consulta-nfse.component';

export const routes: Routes = [
  {
    path: 'consulta-credito',
    component: ConsultaCreditoComponent
  },
  {
    path: 'consulta-nfse',
    component: ConsultaNfseComponent
  }
];
