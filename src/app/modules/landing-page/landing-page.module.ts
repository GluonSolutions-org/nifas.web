import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SwiperSliderComponent } from '../../shared/components/swiper-slider/swiper-slider.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordionModule } from 'primeng/accordion';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LandingPageRoutingModule,
    SwiperSliderComponent, 
    MatIconModule,
    AccordionModule
  ],
  providers: [],
})
export class LandingPageModule { }
