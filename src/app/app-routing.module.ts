import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuardService } from './@auth/auth-guard.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthService } from './@auth/auth.service';

export const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuardService], // we tell Angular to check the access
    /*
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    */
   loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'admin',
    canActivate: [AuthGuardService], // we tell Angular to check the access
    loadChildren: () => import('./@admin/admin.module')
      .then(m => m.AdminModule),
    // loadChildren: './@admin/admin.module#AdminModule',
  },
  {
    path: 'auth',
    loadChildren: './@auth/auth.module#AuthModule',
    /* // Section commented, so Okta Auth Module can be used as default
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ], */
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config), 
    OAuthModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
  ],
})
export class AppRoutingModule {
}
