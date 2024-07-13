import { Component, HostListener, Inject, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'nifas-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent extends BaseComponent{

  isScrollBottom: boolean = false
  private threshold: number = 10; // Adjust the threshold as needed

  constructor(injector: Injector, @Inject(DOCUMENT) private document: Document) {
    super(injector);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const scrollPosition = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    if (scrollPosition >= this.threshold) {
      this.isScrollBottom = true
    } else {
      this.isScrollBottom = false
    }
  }
  
  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }
}
