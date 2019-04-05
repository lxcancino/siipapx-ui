import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditoPageComponent } from './components/credito-page/credito-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreditoPageComponent,
    children: [
      {
        path: 'facturas',
        loadChildren: '../facturas/facturas.module#FacturasModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditoRoutingModule {}
