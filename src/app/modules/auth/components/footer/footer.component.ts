import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { LandingPageSetionsNameEnum } from '../../enums/LandingPageSectionsName.enum';
import { MessagingService } from '../../../../core/services/messaging.service';

@Component({
  selector: 'nifas-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent  extends BaseComponent {

  constructor(injector: Injector, public messagingService : MessagingService) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  scrollToSection(sectionName:LandingPageSetionsNameEnum) {
    
    if(!this._router.url.includes('landing-page'))  this._router.navigate(['/auth/landing-page']);
    setTimeout(() => {
      this.messagingService.push('scrollToSection',sectionName);
    }, 0);

  }
}

