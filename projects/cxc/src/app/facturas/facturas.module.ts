import { NgModule } from '@angular/core';

import { FacturasRoutingModule } from './facturas-routing.module';
import { FacturasPageComponent } from './components/facturas-page/facturas-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FacturasPageComponent],
  imports: [SharedModule, FacturasRoutingModule]
})
export class FacturasModule {}
