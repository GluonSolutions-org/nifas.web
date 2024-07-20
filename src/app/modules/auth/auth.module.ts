import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '../../shared/shared.module';
import { LogInComponent } from './pages/log-in/log-in.component';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { OTPComponent } from '../../shared/components/otp/otp.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpLastStepComponent } from './pages/sign-up-step-two/sign-up-last-step.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    SignUpComponent,
    OtpPageComponent,
    SignUpLastStepComponent
  ],
  imports: [
    HttpClientModule,
    AuthRoutingModule,
    RouterModule,
    SharedModule,
    TabsComponent,
    OTPComponent,

    CommonModule
  ],
  providers: [],
})
export class AuthModule { }
