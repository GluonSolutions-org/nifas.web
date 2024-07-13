import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
          {
            path:'',
            redirectTo:'landing-page',
            pathMatch: 'full'
          },
          {
            path: 'landing-page',
            component: LandingPageComponent
          },
          {
            path: 'blog',
            component: BlogComponent
          }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
