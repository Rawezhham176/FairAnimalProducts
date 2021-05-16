import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginfromMenuPage } from './loginfrom-menu.page';

const routes: Routes = [
  {
    path: '',
    component: LoginfromMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginfromMenuPageRoutingModule {}
