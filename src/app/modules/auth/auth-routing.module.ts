import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LogInComponent } from './pages/log-in/log-in.component';

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
          }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
