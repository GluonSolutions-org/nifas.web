import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'nifas-our-news-card',
  templateUrl: './our-news-card.component.html',
  styleUrl: './our-news-card.component.scss'
})
export class OurNewsCardComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  goToBlog() {
    this._router.navigate(['/auth/blog']);
  }
}

