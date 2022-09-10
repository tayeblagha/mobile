import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentuiPageRoutingModule } from './studentui-routing.module';

import { StudentuiPage } from './studentui.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentuiPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [StudentuiPage]
})
export class StudentuiPageModule {}
