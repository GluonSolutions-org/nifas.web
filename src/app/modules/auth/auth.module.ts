import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AuthRoutingModule } from './auth-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { OurServicesWidgetsComponent } from './components/our-services-widgets/our-services-widgets.component';
import { OurNewsCardComponent } from './components/our-news-card/our-news-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    BurgerMenuComponent,
    FooterComponent,
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
