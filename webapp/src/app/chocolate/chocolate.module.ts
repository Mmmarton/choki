import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChocolateListComponent } from './chocolate-list';
import { ChocolateRoutingModule } from './chocolate-routing.module';

@NgModule({
  declarations: [ChocolateListComponent],
  imports: [CommonModule, FormsModule, ChocolateRoutingModule],
  providers: []
})
export class ChocolateModule {}
