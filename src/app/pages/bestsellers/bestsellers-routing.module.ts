import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestsellersPage } from './bestsellers.page';

const routes: Routes = [
  {
    path: '',
    component: BestsellersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestsellersPageRoutingModule {}
