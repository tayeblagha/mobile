import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEtudiantPageRoutingModule } from './update-etudiant-routing.module';

import { UpdateEtudiantPage } from './update-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEtudiantPageRoutingModule
  ],
  declarations: [UpdateEtudiantPage]
})
export class UpdateEtudiantPageModule {}
