import { Component, Injector } from '@angular/core';

import { BaseComponent } from '../../../../core/components/base.component';
import { ISwiperSliderItems } from '../../../../shared/interfaces/swiper-slider-Items.interface';
import { MessagingService } from '../../../../core/services/messaging.service';
import { IOurServicesItems } from '../../../../shared/interfaces/our-services-Items.interface';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'nifas-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent extends BaseComponent {

  activeIndex: number | null = null;

  questions = [
    {
      header: 'ما هي منصة الطبي للرعاية الصحية',
      content: 'منصة الطبي، المنصة الأولى في الوطن العربي التي تقدم خدمة الاستشارات الطبية عن بعد وتتيح للمرضى التواصل مع الأطباء المعتمدين مباشرة من خلال مكالمة هاتفية أو محادثة نصية. وهي المنصة الطبية العربية الأكبر التي تُعنى بتقديم المحتوى الطبي الموثوق.'
    },
    {
      header: 'ما هي منصة الطبي للرعاية الصحية',
      content: 'منصة الطبي، المنصة الأولى في الوطن العربي التي تقدم خدمة الاستشارات الطبية عن بعد وتتيح للمرضى التواصل مع الأطباء المعتمدين مباشرة من خلال مكالمة هاتفية أو محادثة نصية. وهي المنصة الطبية العربية الأكبر التي تُعنى بتقديم المحتوى الطبي الموثوق.'
    },
    {
      header: 'ما هي منصة الطبي للرعاية الصحية',
      content: 'منصة الطبي، المنصة الأولى في الوطن العربي التي تقدم خدمة الاستشارات الطبية عن بعد وتتيح للمرضى التواصل مع الأطباء المعتمدين مباشرة من خلال مكالمة هاتفية أو محادثة نصية. وهي المنصة الطبية العربية الأكبر التي تُعنى بتقديم المحتوى الطبي الموثوق.'
    },
    {
      header: 'ما هي منصة الطبي للرعاية الصحية',
      content: 'منصة الطبي، المنصة الأولى في الوطن العربي التي تقدم خدمة الاستشارات الطبية عن بعد وتتيح للمرضى التواصل مع الأطباء المعتمدين مباشرة من خلال مكالمة هاتفية أو محادثة نصية. وهي المنصة الطبية العربية الأكبر التي تُعنى بتقديم المحتوى الطبي الموثوق.'
    }
  ];

  setActiveIndex(index: number | null) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

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

  swiperSliderItemsTwo: ISwiperSliderItems[] = [
    {
      id: 0,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageOne.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'
    },
    {
      id: 2,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageTwo.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'
    },
    {
      id: 3,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageThree.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
    },
    {
      id: 4,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageOne.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
    },
    {
      id: 5,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageTwo.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
    },
    {
      id: 6,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageThree.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
    },
    {
      id: 7,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageOne.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
    },
    {
      id: 8,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageTwo.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
    },
    {
      id: 9,
      description: 'Nifas wins first place in SPARK program by MISK for aspiring entrepreneurs!',
      image: '/assets/images/cardViewImageThree.jfif',
      programName: 'SPARK program',
      date: '13th December 2022'      
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
        interval: 3000 // Adjust interval as needed (in milliseconds)
      });
    }
   };

  ngSuperOnDestroy() { }
}

