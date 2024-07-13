import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './core/components/base.component';
import { TooltipService } from './shared/tooltip/tooltip.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {
  title = 'NIFAS';

  constructor(private tooltipService: TooltipService,injector: Injector) {
    super(injector);
  }

  protected override ngSuperOnInit() {
    this.tooltipService.loadTooltip();
  }

  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }
}
