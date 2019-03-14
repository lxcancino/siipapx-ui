import { NgModule } from '@angular/core';
import { DemoComponent } from './demo-component/demo.component';

@NgModule({
  declarations: [DemoComponent],
  exports: [DemoComponent],
  imports: []
})
export class LuxorModule {}
