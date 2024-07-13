import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';

@Component({
  selector: 'nifas-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.scss',
  standalone: true,
  imports: []
})
export class SwiperSliderComponent  extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

}

