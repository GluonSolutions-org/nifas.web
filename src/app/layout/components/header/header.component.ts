import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { MessagingService } from '../../../core/services/messaging.service';
import { LandingPageSetionsNameEnum } from '../../../modules/auth/enums/LandingPageSectionsName.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nifas-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports:[
    RouterModule,
    MatIconModule, 
    MatTooltip
  ]
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
    
    // if(!this._router.url.includes('landing-page'))  this.goToLandingPage()
    // setTimeout(() => {
    //   this.messagingService.push('scrollToSection',sectionName);
    // }, 0);

  }

  // goToLandingPage() {
  //   this._router.navigate(['/auth/landing-page']);
  //   this.messagingService.push('closeBurgerMenu');
  // }
}

