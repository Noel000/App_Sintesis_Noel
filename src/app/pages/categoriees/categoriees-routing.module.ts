import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieesPage } from './categoriees.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieesPageRoutingModule {}
