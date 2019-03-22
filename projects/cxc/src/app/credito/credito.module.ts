import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CreditoRoutingModule } from './credito-routing.module';
import { CreditoPageComponent } from './components/credito-page/credito-page.component';
import { CovalentLayoutModule } from '@covalent/core';

@NgModule({
  declarations: [CreditoPageComponent],
  imports: [CreditoRoutingModule, SharedModule, CovalentLayoutModule]
})
export class CreditoModule {}
