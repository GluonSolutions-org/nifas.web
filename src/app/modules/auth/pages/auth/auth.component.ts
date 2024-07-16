import { Component, Inject, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'nifas-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent extends BaseComponent{

  constructor(injector: Injector, @Inject(DOCUMENT) private document: Document) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }
}
