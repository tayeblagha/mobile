import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentuiPage } from './studentui.page';

const routes: Routes = [
  {
    path: '',
    component: StudentuiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentuiPageRoutingModule {}
