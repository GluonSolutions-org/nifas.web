import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'landing-page',
        component: LandingPageComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
