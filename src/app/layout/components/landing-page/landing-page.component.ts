import { Component, Injector } from '@angular/core';
import { MessagingService } from '../../../core/services/messaging.service';
import { BaseComponent } from '../../../core/components/base.component';
import { SwiperSliderComponent } from '../../../shared/components/swiper-slider/swiper-slider.component';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'nifas-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  standalone: true,
  imports:[SwiperSliderComponent]
})
export class LandingPageComponent extends BaseComponent {

  constructor(injector: Injector,public messagingService : MessagingService) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {
    const carouselElement = document.getElementById('carouselL');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 5000 // Adjust interval as needed (in milliseconds)
      });
    }
   };

  ngSuperOnDestroy() { }
}

