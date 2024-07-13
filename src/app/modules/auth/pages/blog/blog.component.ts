import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../../core/components/base.component';

@Component({
  selector: 'nifas-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})

export class BlogComponent extends BaseComponent {
  
  constructor(injector: Injector) {
    super(injector);
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

}
