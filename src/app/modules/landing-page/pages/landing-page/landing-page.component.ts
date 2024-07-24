import { Component, ElementRef, Injector, ViewChild } from '@angular/core';

import { BaseComponent } from '../../../../core/components/base.component';
import { MessagingService } from '../../../../core/services/messaging.service';
import { IOurServicesItems } from '../../../../shared/interfaces/our-services-Items.interface';
import { LandingPageService } from '../../services/landing-page.service';
import { ICarouselItems } from '../../interfaces/carousel-Items.interface';
import { INwesItems } from '../../../../shared/interfaces/news-Items.interface';
import { IOffersItems } from '../../../../shared/interfaces/offers-Items.interface';
import { IServiceslItems } from '../../interfaces/services-Items.interface';
import { IFrequentQuestionsItems } from '../../interfaces/frequent-questions-Items.interface';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'nifas-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent extends BaseComponent {

  isBusy: boolean = false;

  carouselItems : ICarouselItems[] = [];
  offerItems : IOffersItems[] = [];
  nwesItems : INwesItems[] = [];
  servicesItems : IServiceslItems[] = [];
  frequentQuestions : IFrequentQuestionsItems[] = [];

  activeIndex: number | null = null;

  @ViewChild('home') home!: ElementRef;
  @ViewChild('aboutUs') aboutUs!: ElementRef;
  @ViewChild('ourNews') ourNews!: ElementRef;
  @ViewChild('ourServices') ourServices!: ElementRef;
  @ViewChild('callUs') callUs!: ElementRef;

  constructor(injector: Injector,public messagingService : MessagingService, public landingPageService : LandingPageService) {
    super(injector);

    this.subscription = this.messagingService.subject('scrollToSection').subscribe({
      next:(res)=> {
        this.scrollToSection(res)
      }
    })
  }

  ngSuperOnInit() { 
    this.loadData();
  };

  ngSuperAfterViewInit() {
    const carouselElement = document.getElementById('carouselL');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000 // Adjust interval as needed (in milliseconds)
      });
    }
  };

  ngSuperOnDestroy() { }

  scrollToSection(section: string) {
    let element: ElementRef;
    switch (section) {
      case 'home':
        element = this.home;
        break;
      case 'aboutUs':
        element = this.aboutUs;
        break;
      case 'ourServices':
        element = this.ourServices;
        break;
      case 'ourNews':
        element = this.ourNews;
        break;
      case 'callUs':
        element = this.callUs;
        break;
      default:
        return;
    }
    element?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setActiveIndex(index: number | null) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  loadData() {
    this.isBusy = true;
    this.landingPageService.getAllData().subscribe({
      next: (responses: any[]) => {
        const [
          slidersResponse,
          offersResponse,
          servicesResponse,
          blogsResponse,
          frequentQuestionsResponse
        ] = responses;

        if (slidersResponse.status) {
          this.carouselItems = slidersResponse.data.collection;
        }

        if (offersResponse.status) {
          this.offerItems = offersResponse.data.collection;
        }

        if (servicesResponse.status) {
          this.servicesItems = servicesResponse.data.collection;
        }

        if (blogsResponse.status) {
          this.nwesItems = blogsResponse.data.collection;
        }

        if (frequentQuestionsResponse.status) {
          this.frequentQuestions = frequentQuestionsResponse.data.collection;
        }

        this.isBusy = false;
      },
      error: () => {
        this.isBusy = false;
      }
    });
  }
}

