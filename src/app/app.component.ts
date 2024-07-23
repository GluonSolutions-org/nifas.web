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

  title = 'NIFAS';

  constructor(injector: Injector) {
    super(injector);
  }

  protected override ngSuperOnInit() {}

  protected override ngSuperAfterViewInit() {}

  protected override ngSuperOnDestroy() {}
  
}
