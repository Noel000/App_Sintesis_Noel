import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PractiquesPageRoutingModule } from './practiques-routing.module';

import { PractiquesPage } from './practiques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PractiquesPageRoutingModule
  ],
  declarations: [PractiquesPage]
})
export class PractiquesPageModule {}
