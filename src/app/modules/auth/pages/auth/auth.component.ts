import { Component, Inject, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { DOCUMENT } from '@angular/common';

declare var bootstrap: any; // Declare Bootstrap as any

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

  ngSuperAfterViewInit() {
    const carouselElement = document.getElementById('carouselL');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000 // Adjust interval as needed (in milliseconds)
      });
    }
   };

  ngSuperOnDestroy() { }
}
