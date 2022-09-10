import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page4PageRoutingModule } from './page4-routing.module';

import { Page4Page } from './page4.page';
import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page4PageRoutingModule,
    NgCalendarModule
  ],
  declarations: [Page4Page]
})
export class Page4PageModule {}
