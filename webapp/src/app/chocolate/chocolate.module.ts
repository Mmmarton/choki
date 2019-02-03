import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChocolateListComponent } from './chocolate-list';
import { ChocolateRoutingModule } from './chocolate-routing.module';
import { ChocolatePreviewComponent } from './chocolate-preview/chocolate-preview.component';

@NgModule({
  declarations: [ChocolateListComponent, ChocolatePreviewComponent],
  imports: [CommonModule, FormsModule, ChocolateRoutingModule]
})
export class ChocolateModule {}
