import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './core/components/base.component';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, TranslateModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[MessageService]
})
export class AppComponent extends BaseComponent {

  language : string = 'en'

  title = 'NIFAS';

  constructor(injector: Injector) {
    super(injector);
  }

  protected override ngSuperOnInit() {

    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);

    const body = document.body;
    if(this.language == 'ar') {
      body.classList.add('ltr');
    } else {
      body.classList.remove('ltr');
    }

  }

  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }
}
