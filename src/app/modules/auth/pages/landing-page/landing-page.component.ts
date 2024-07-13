import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { MessagingService } from '../../../../core/services/messaging.service';

@Component({
  selector: 'nifas-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent extends BaseComponent{
  
  constructor(injector: Injector,public messagingService : MessagingService) {
    super(injector);

    this.subscription = this.messagingService.subject('scrollToSection').subscribe({
      next:(res)=> {
        this.scrollToSection(res)
      }
    })
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  @ViewChild('aboutUs') aboutUs!: ElementRef;
  @ViewChild('ourvision') ourvision!: ElementRef;
  @ViewChild('ourMission') ourMission!: ElementRef;
  @ViewChild('ourServices') ourServices!: ElementRef;
  @ViewChild('ourNews') ourNews!: ElementRef;
  @ViewChild('callUs') callUs!: ElementRef;

  scrollToSection(section: string) {
    let element: ElementRef;
    switch (section) {
      case 'aboutUs':
        element = this.aboutUs;
        break;
      case 'ourvision':
        element = this.ourvision;
        break;
      case 'ourMission':
        element = this.ourMission;
        break;
      case 'ourServices':
        element = this.ourServices;
        break;
      case 'ourNews':
        element = this.ourNews;
        break;
      case 'callUs':
        element = this.callUs;
        break;
      default:
        return;
    }
    element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
}
