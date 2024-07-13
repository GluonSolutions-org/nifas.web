import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { MessagingService } from '../../../../core/services/messaging.service';
import { LandingPageSetionsNameEnum } from '../../enums/LandingPageSectionsName.enum';

@Component({
  selector: 'nifas-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseComponent {

  isLandingPage !: boolean;

  constructor(injector: Injector,public messagingService : MessagingService) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  openBurgerMenu() {
    this.messagingService.push('openBurgerMenu');
  }

  scrollToSection(sectionName:LandingPageSetionsNameEnum) {
    
    if(!this._router.url.includes('landing-page'))  this.goToLandingPage()
    setTimeout(() => {
      this.messagingService.push('scrollToSection',sectionName);
    }, 0);

  }

  goToLandingPage() {
    this._router.navigate(['/auth/landing-page']);
    this.messagingService.push('closeBurgerMenu');
  }
}

