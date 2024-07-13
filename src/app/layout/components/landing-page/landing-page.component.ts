import { Component, Injector } from '@angular/core';
import { MessagingService } from '../../../core/services/messaging.service';
import { BaseComponent } from '../../../core/components/base.component';
import { SwiperSliderComponent } from '../../../shared/components/swiper-slider/swiper-slider.component';
import { ISwiperSliderItems } from '../../../shared/interfaces/swiper-slider-Items.interface';
import { IOurServicesItems } from '../../../shared/interfaces/our-services-Items.interface';
import { MatIconModule } from '@angular/material/icon';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'nifas-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  standalone: true,
  imports:[SwiperSliderComponent, MatIconModule]
})
export class LandingPageComponent extends BaseComponent {

  ourServicesItems : IOurServicesItems[] = [
    {
      icon: '',
      label: 'Chat'
    },
    {
      icon: '',
      label: 'Call'
    },
    {
      icon: '',
      label: 'Video Call'
    },
    {
      icon: '',
      label: 'Home Health Care'
    },
    {
      icon: '',
      label: 'Nanny Visit'
    },
    {
      icon: '',
      label: 'Educational'
    },
    {
      icon: '',
      label: 'E-Commerce'
    }
  ];

  swiperSliderItems: ISwiperSliderItems[] = [
    {
      id: 0,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionOneImage.png',
    },
    {
      id: 2,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionFiveImage.png',
    },
    {
      id: 3,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionFourImage.jpeg',
    },
    {
      id: 4,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionOneImage.png',
    },
    {
      id: 5,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionFiveImage.png',
    },
    {
      id: 6,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionFourImage.jpeg',
    },
    {
      id: 7,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionOneImage.png',
    },
    {
      id: 8,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionFiveImage.png',
    },
    {
      id: 9,
      description: 'Up to 50% discount',
      image: '/assets/images/sectionFourImage.jpeg',
    }
  ]

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

