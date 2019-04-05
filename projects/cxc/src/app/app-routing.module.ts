import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/containers/main-page/main-page.component';

const routes: Routes = [
  { path: 'credito', loadChildren: './credito/credito.module#CreditoModule' },
  { path: '', redirectTo: 'credito', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
