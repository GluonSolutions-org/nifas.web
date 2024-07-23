import { Component, Injector, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LandingPageSetionsNameEnum } from '../../modules/auth/enums/LandingPageSectionsName.enum';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'Nifas-base',
  template: '',
})
export abstract class BaseComponent implements OnInit {

  language !: any;

  landingPageSetionsNameEnum = LandingPageSetionsNameEnum;

  public readonly _route: ActivatedRoute;
  public readonly _router: Router;
  public readonly translate: TranslateService;
  public readonly _toster: MessageService;
  public readonly _langService: LanguageService;

  protected constructor(protected injector: Injector) {

    this._route = injector.get(ActivatedRoute);
    this._router = injector.get(Router);
    this.translate = injector.get(TranslateService);
    this._toster = injector.get(MessageService);
    this._langService = injector.get(LanguageService);
  }

  ngOnInit() {
    this.ngSuperOnInit();
    
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });

    if(this._langService.getLanguage()) {
      this.language = this._langService.getLanguage()
    } else {
      this.language = 'ar'
    }

    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);

    const body = document.body;
    if(this.language == 'ar') {
      body.classList.add('ltr');
    } else {
      body.classList.remove('ltr');
    }
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
