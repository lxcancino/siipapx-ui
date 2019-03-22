import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'swx-credito-page',
  templateUrl: './credito-page.component.html',
  styleUrls: ['./credito-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditoPageComponent implements OnInit {
  navigation = [
    {
      path: 'facturas',
      title: 'Facturas',
      description: 'Cuentas por cobrar',
      icon: 'shopping_cart'
    },
    {
      path: 'cobros',
      title: 'Cobros',
      description: 'Registro de cobros',
      icon: 'attach_money'
    },
    {
      path: 'revisiones',
      title: 'Revisión',
      description: 'Revisión y cobro',
      icon: 'event_note'
    },
    {
      path: 'devoluciones',
      title: 'Devoluciones',
      description: 'Notas de devolución',
      icon: 'keyboard_return'
    },
    {
      path: 'bonificaciones',
      title: 'Bonificación',
      description: 'Notas de bonificación',
      icon: 'system_update_alt'
    },
    {
      path: 'cargos',
      title: 'Cargos',
      description: 'Notas de cargo',
      icon: 'event_busy'
    },
    {
      path: 'comisiones',
      title: 'Comisiones',
      description: 'Comisiones cobradores',
      icon: 'people'
    }
  ];

  constructor(public media: TdMediaService) {}

  ngOnInit() {}
}
