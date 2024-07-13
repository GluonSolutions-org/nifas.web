import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './core/components/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {
  title = 'NIFAS';

  constructor(injector: Injector) {
    super(injector);
  }

  protected override ngSuperOnInit() {}

  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }
}
