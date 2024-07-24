import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AccordionModule } from 'primeng/accordion';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    LandingPageRoutingModule,
    AccordionModule
  ],
  providers: [],
})
export class LandingPageModule { }
