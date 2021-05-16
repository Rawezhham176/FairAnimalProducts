import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninProviderPageRoutingModule } from './signin-provider-routing.module';

import { SigninProviderPage } from './signin-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninProviderPageRoutingModule
  ],
  declarations: [SigninProviderPage]
})
export class SigninProviderPageModule {}
