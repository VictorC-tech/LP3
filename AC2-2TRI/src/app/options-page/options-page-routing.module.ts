import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsPagePage } from './options-page.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsPagePageRoutingModule {}
