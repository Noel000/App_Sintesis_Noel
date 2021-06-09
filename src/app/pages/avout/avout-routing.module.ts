import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvoutPage } from './avout.page';

const routes: Routes = [
  {
    path: '',
    component: AvoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvoutPageRoutingModule {}
