import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninProviderPage } from './signin-provider.page';

const routes: Routes = [
  {
    path: '',
    component: SigninProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninProviderPageRoutingModule {}
