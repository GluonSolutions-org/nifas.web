import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path:'',
    //     redirectTo:'auth',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        loadChildren: () => import('./layout/modules/master/master.module').then(m => m.MasterModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    },



    
];
