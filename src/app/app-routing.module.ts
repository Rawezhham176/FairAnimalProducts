import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginfrom-menu',
    loadChildren: () => import('./loginfrom-menu/loginfrom-menu.module').then( m => m.LoginfromMenuPageModule)
  },
  {
    path: 'signin-costomer',
    loadChildren: () => import('./signin-costomer/signin-costomer.module').then( m => m.SigninCostomerPageModule)
  },
  {
    path: 'signin-provider',
    loadChildren: () => import('./signin-provider/signin-provider.module').then( m => m.SigninProviderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
