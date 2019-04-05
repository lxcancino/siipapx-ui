import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturasPageComponent } from './components/facturas-page/facturas-page.component';

const routes: Routes = [{ path: '', component: FacturasPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasRoutingModule {}
