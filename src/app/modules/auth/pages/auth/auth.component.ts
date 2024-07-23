import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'nifas-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent extends BaseComponent{

  constructor(injector: Injector) {
    super(injector);
  }

  setLanguage(lang:string) {
    this._langService.setLanguage(lang);

    const body = document.body;
    if(lang == 'ar') {
      body.classList.add('ltr');
    } else {
      body.classList.remove('ltr');
    }
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
