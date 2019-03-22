import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

import { Sucursal } from '@luxor/models/sucursal';

@Component({
  selector: 'swx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  sucursal: Sucursal;

  constructor() {}

  ngOnInit() {}
}
