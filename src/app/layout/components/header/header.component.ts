import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { MessagingService } from '../../../core/services/messaging.service';
import { LandingPageSetionsNameEnum } from '../../../modules/auth/enums/LandingPageSectionsName.enum';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'nifas-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports:[
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButton,
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

