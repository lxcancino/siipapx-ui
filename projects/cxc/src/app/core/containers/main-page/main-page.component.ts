import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE } from '../../models';

@Component({
  selector: 'swx-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  app = {
    title: 'SIIPAPX CxC',
    shortDescription: 'Cuentas por cobrar',
    longDescripcion:
      'Sistema de control y administración de Cuentas por cobrar '
  };

  operations: ROUTE[] = [
    {
      icon: 'people',
      route: '/clientes',
      title: 'Clientes'
    },
    {
      icon: 'assignment',
      route: 'catalogos',
      title: 'Catálogos'
    },
    {
      icon: 'my_library_books',
      route: '/credito',
      title: 'Crédito'
    },
    {
      icon: 'local_atm',
      route: 'cobranza/con',
      title: 'Cobranza contado'
    },

    {
      icon: 'speaker_notes',
      route: 'cobranza/che',
      title: 'Cobranza CHE'
    },
    {
      icon: 'device_hub',
      route: 'cobranza/jur',
      title: 'Cobranza JUR'
    }
  ];

  dashboards: ROUTE[] = [
    {
      icon: 'equalizer',
      route: 'antiguedad',
      title: 'Antigüedad de saldos'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
