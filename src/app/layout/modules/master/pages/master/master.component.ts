import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../../core/components/base.component';

@Component({
  selector: 'nifas-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  protected override ngSuperOnInit() {
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }
}


