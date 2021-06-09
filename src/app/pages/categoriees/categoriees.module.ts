import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieesPageRoutingModule } from './categoriees-routing.module';

import { CategorieesPage } from './categoriees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieesPageRoutingModule
  ],
  declarations: [CategorieesPage]
})
export class CategorieesPageModule {}
