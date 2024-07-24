import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from './forms/form.module';
import { MatTooltip } from '@angular/material/tooltip';
import { SwiperSliderComponent } from './components/swiper-slider/swiper-slider.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export const modules: any = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule, 
  FormModule,
  MatTooltip,
  MatIconModule,
  SwiperSliderComponent,
  AvatarComponent,
  LoaderComponent
]

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: []

})

export class SharedModule { }
