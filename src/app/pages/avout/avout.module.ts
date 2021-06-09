import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvoutPageRoutingModule } from './avout-routing.module';

import { AvoutPage } from './avout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvoutPageRoutingModule
  ],
  declarations: [AvoutPage]
})
export class AvoutPageModule {}
