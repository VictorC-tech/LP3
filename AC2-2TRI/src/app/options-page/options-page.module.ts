import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsPagePageRoutingModule } from './options-page-routing.module';

import { OptionsPagePage } from './options-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsPagePageRoutingModule
  ],
  declarations: [OptionsPagePage]
})
export class OptionsPagePageModule {}
