import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page2PageRoutingModule } from './page2-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Page2Page } from './page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page2PageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [Page2Page]
})
export class Page2PageModule {}
