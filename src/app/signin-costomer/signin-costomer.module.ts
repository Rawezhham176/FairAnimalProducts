import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninCostomerPageRoutingModule } from './signin-costomer-routing.module';

import { SigninCostomerPage } from './signin-costomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninCostomerPageRoutingModule
  ],
  declarations: [SigninCostomerPage]
})
export class SigninCostomerPageModule {}
