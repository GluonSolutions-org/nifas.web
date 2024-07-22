import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { MessagingService } from '../../../core/services/messaging.service';
import { LandingPageSetionsNameEnum } from '../../../modules/auth/enums/LandingPageSectionsName.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'nifas-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports:[
    CommonModule,
    TranslateModule,
    RouterModule,
    MatIconModule, 
    MatTooltip,
    OverlayPanelModule,
    AvatarComponent
  ]
})
export class HeaderComponent extends BaseComponent {

  notifications = [
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: true },
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: true },
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: true },
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: false },
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: false },
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: false },
      { description: 'Notifications', date: '12:34 - 20/10/2024', unRead: false }
  ];

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

