import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { CovalentModule } from '../shared/covalent.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { throwIfAlreadyLoaded } from './module-import-check';

@NgModule({
  declarations: [ToolbarComponent, MainPageComponent, SideNavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CovalentModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [MainPageComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
