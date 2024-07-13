import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';

@Component({
  selector: 'nifas-our-services-widgets',
  templateUrl: './our-services-widgets.component.html',
  styleUrl: './our-services-widgets.component.scss'
})
export class OurServicesWidgetsComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }
}

