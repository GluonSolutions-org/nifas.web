import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from './Forms/form.module';
import { MatTooltip } from '@angular/material/tooltip';
import { TabsComponent } from './components/tabs/tabs.component';
import { SwiperSliderComponent } from './components/swiper-slider/swiper-slider.component';
import { AvatarComponent } from './components/avatar/avatar.component';

export const modules: any = [
  FormsModule,
  ReactiveFormsModule, 
  FormModule,
  MatTooltip,
  MatIconModule,
  TabsComponent,
  SwiperSliderComponent,
  AvatarComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: []

})

export class SharedModule { }
