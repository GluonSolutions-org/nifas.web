import { Component, Inject, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'nifas-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent extends BaseComponent{

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }
}
