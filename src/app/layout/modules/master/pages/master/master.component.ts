import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../../core/components/base.component';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'nifas-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent extends BaseComponent {

  constructor(injector: Injector, public landingPageService : LandingPageService) {
    super(injector);

    this.landingPageService.getItemsSliders(
      {
          "currentPage": 1,
          "pageSize": 150,
          "active": 1
      }
    ).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }

  protected override ngSuperOnInit() {
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }
}


