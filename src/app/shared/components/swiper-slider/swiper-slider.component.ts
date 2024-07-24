import { INwesItems } from './../../interfaces/news-Items.interface';
import { Component, Injector, Input } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatTooltip } from '@angular/material/tooltip';
import { AvatarComponent } from '../avatar/avatar.component';
import { IOffersItems } from '../../interfaces/offers-Items.interface';

@Component({
  selector: 'nifas-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule, MatTooltip, AvatarComponent]
})
export class SwiperSliderComponent extends BaseComponent {

  @Input() sectionOthorTitle !: string;
  @Input() sectionTitle !: string;
  @Input() items: IOffersItems[] | INwesItems[] = [];
  @Input() isCardView : boolean = false;

  responsiveOptions: any[] | undefined;
  autoplayInterval = 3000;  

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { 
    this.responsiveOptions = [
        {
            breakpoint: '992px',
            numVisible: 2,
            numScroll: 2
        },
        {
          breakpoint: '600px',
          numVisible: 1,
          numScroll: 1
        }
    ];
  };
  
  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

}


