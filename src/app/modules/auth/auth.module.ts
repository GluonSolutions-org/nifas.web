import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '../../shared/shared.module';
import { LogInComponent } from './pages/log-in/log-in.component';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent
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
