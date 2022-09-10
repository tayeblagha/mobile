import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tets1Page } from './tets1.page';

const routes: Routes = [
  {
    path: '',
    component: Tets1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tets1PageRoutingModule {}
