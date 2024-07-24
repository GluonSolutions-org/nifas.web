import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '../../shared/shared.module';
import { LogInComponent } from './pages/log-in/log-in.component';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { OTPComponent } from '../../shared/components/otp/otp.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpLastStepComponent } from './pages/sign-up-step-two/sign-up-last-step.component';


@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    SignUpComponent,
    OtpPageComponent,
    SignUpLastStepComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    TabsComponent,
    OTPComponent
  ],
  providers: [],
})
export class AuthModule { }
