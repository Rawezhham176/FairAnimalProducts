import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginfromMenuPageRoutingModule } from './loginfrom-menu-routing.module';

import { LoginfromMenuPage } from './loginfrom-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginfromMenuPageRoutingModule
  ],
  declarations: [LoginfromMenuPage]
})
export class LoginfromMenuPageModule {}
