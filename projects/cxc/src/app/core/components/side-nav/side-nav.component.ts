import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ROUTE } from '../../models';

@Component({
  selector: 'swx-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  @Input() operations: ROUTE[] = [];

  @Input() dashboards: ROUTE[] = [];

  constructor() {}

  ngOnInit() {}
}
