import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninCostomerPage } from './signin-costomer.page';

const routes: Routes = [
  {
    path: '',
    component: SigninCostomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninCostomerPageRoutingModule {}
