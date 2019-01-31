import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChocolateListComponent } from './chocolate-list';

const routes: Routes = [
  {
    path: 'chocolate',
    component: ChocolateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChocolateRoutingModule {}
