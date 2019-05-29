import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChocolateDetailsComponent } from './chocolate-details';
import { ChocolateListComponent } from './chocolate-list';

const routes: Routes = [
  {
    path: 'chocolate/list/:keyword',
    component: ChocolateListComponent
  },
  {
    path: 'chocolate/details/:brand/:type',
    component: ChocolateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChocolateRoutingModule { }
