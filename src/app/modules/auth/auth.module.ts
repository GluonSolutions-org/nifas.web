import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    HttpClientModule,
    AuthRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
})
export class AuthModule { }
