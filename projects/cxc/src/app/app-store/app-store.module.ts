import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './reducers/index';

import { environment } from '../../environments/environment';
import { CustomSerializer } from './reducers/custom-router-serializer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {}),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'SIIPAPX CXC',
          logOnly: environment.production
        })
  ]
})
export class AppStoreModule {}
