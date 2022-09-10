import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEtudiantPage } from './update-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEtudiantPageRoutingModule {}
