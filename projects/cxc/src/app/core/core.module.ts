import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainPageComponent } from './containers/main-page/main-page.component';

@NgModule({
  declarations: [ToolbarComponent, MainPageComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [MainPageComponent]
})
export class CoreModule {}