import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store/app-store.module';
import { LuxorModule } from '../@luxor/luxor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    LuxorModule,
    AppRoutingModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
