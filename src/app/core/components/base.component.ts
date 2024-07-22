import { Component, Injector, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LandingPageSetionsNameEnum } from '../../modules/auth/enums/LandingPageSectionsName.enum';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'Nifas-base',
  template: '',
})
export abstract class BaseComponent implements OnInit {

  landingPageSetionsNameEnum = LandingPageSetionsNameEnum;

  public readonly _route: ActivatedRoute;
  public readonly _router: Router;
  public readonly translate: TranslateService;

  protected constructor(protected injector: Injector) {

    this._route = injector.get(ActivatedRoute);
    this._router = injector.get(Router);
    this.translate = injector.get(TranslateService);

  }

  ngOnInit() {
    this.ngSuperOnInit();
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }

  ngAfterViewInit() {
    this.ngSuperAfterViewInit();
  }

  ngOnDestroy() {
    this.subscriptionsList.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.ngSuperOnDestroy();
  }

  protected abstract ngSuperOnInit(): any;
  protected abstract ngSuperAfterViewInit(): any;
  protected abstract ngSuperOnDestroy(): any

  private subscriptionsList: Array<Subscription> = [];
  public set subscription(v: Subscription) {
    this.subscriptionsList[this.subscriptionsList.length] = v;
  }
}
