import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestsellersPageRoutingModule } from './bestsellers-routing.module';

import { BestsellersPage } from './bestsellers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestsellersPageRoutingModule
  ],
  declarations: [BestsellersPage]
})
export class BestsellersPageModule {}
