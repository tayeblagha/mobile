import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tets1PageRoutingModule } from './tets1-routing.module';

import { Tets1Page } from './tets1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tets1PageRoutingModule
  ],
  declarations: [Tets1Page]
})
export class Tets1PageModule {}
