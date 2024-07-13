import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AuthRoutingModule } from './auth-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '../../shared/shared.module';
import { OurServicesWidgetsComponent } from './components/our-services-widgets/our-services-widgets.component';
import { OurNewsCardComponent } from './components/our-news-card/our-news-card.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AuthComponent,
    LandingPageComponent,
    BlogComponent,
    OurServicesWidgetsComponent,
    OurNewsCardComponent
  ],
  imports: [
    HttpClientModule,
    AuthRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
})
export class AuthModule { }
