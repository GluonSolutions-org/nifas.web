import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './pages/master/master.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterRoutingModule } from './master-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BurgerMenuComponent } from '../../components/burger-menu/burger-menu.component';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderComponent,
    BurgerMenuComponent,
    FooterComponent,
    HttpClientModule
  ],
  providers: [],
})

export class MasterModule { }
