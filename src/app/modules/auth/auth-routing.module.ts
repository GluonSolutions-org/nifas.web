import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpLastStepComponent } from './pages/sign-up-step-two/sign-up-last-step.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
          {
            path:'',
            redirectTo:'log-in',
            pathMatch: 'full'
          },
          {
            path: 'log-in',
            component: LogInComponent
          },
                    {
            path: 'sign-up',
            component: SignUpComponent
          },
          {
            path: 'otp-page',
            component: OtpPageComponent
          },
          {
            path: 'sign-up-last-step',
            component: SignUpLastStepComponent
          }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
