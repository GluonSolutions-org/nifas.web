import { Component, Injector } from '@angular/core';
import { MessagingService } from '../../../core/services/messaging.service';
import { BaseComponent } from '../../../core/components/base.component';
import { LandingPageSetionsNameEnum } from '../../../modules/auth/enums/LandingPageSectionsName.enum';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'nifas-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  standalone: true,
  imports:[
    MatIconModule,
  ]
})
export class BurgerMenuComponent extends BaseComponent {

  isOpen: boolean = false;

  constructor(injector: Injector,public messagingService : MessagingService) {
    super(injector);

    this.subscription = this.messagingService.subject('openBurgerMenu').subscribe({
      next:(res)=> {
        this.openBurgerMenu()
      }
    })

    this.subscription = this.messagingService.subject('closeBurgerMenu').subscribe({
      next:(res)=> {
        this.closeBurgerMenu()
      }
    })
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  onBoxClick(event: MouseEvent | undefined): void {
    event?.stopPropagation();
  }

  closeBurgerMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  openBurgerMenu() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  scrollToSection(sectionName:LandingPageSetionsNameEnum) {
    this.closeBurgerMenu();
    if(!this._router.url.includes('landing-page'))  this._router.navigate(['/auth/landing-page']);
      setTimeout(() => {
        this.messagingService.push('scrollToSection',sectionName);
      }, 0);
  }
}

