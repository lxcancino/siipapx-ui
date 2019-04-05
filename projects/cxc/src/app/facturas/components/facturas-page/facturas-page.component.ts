import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'swx-facturas-page',
  templateUrl: './facturas-page.component.html',
  styleUrls: ['./facturas-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacturasPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
