import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from '../../../core/components/base.component';
import { MatIcon } from '@angular/material/icon';
import { ITabs } from '../../interfaces/tabs.interface';
 
@Component({
  selector: 'nifas-tabs',
  standalone:true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  imports:[CommonModule,RouterModule, MatIcon],
})
export class TabsComponent extends BaseComponent {

  @Output('onSelectTab') onSelectTab = new EventEmitter();
  @Input() tabs: ITabs[] = [];
  selectedTabId: number = 0;
 
  constructor(injector: Injector) {
    super(injector); 
  }
 
  ngSuperOnInit() {};

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  selectTab(id: any) {
    this.selectedTabId = id;
    this.onSelectTab.emit(id)
  }

}
