import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE } from '../../models';

@Component({
  selector: 'swx-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  operations: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'sales/activities',
      title: 'Activities'
    },
    {
      icon: 'dashboard',
      route: 'sales/dashboards',
      title: 'Dashboards'
    }
  ];

  dashboards: ROUTE[] = [
    {
      icon: 'contacts',
      route: 'sales/accounts',
      title: 'Accounts'
    },
    {
      icon: 'people',
      route: 'sales/contacts',
      title: 'Contacts'
    },
    {
      icon: 'settings_phone',
      route: 'sales/leads',
      title: 'Leads'
    },
    {
      icon: 'account_box',
      route: 'sales/opportunities',
      title: 'Opportunities'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
