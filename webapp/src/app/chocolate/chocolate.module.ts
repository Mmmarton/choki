import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChocolateListComponent } from './chocolate-list';
import { ChocolateRoutingModule } from './chocolate-routing.module';
import { ChocolatePreviewComponent } from './chocolate-preview/chocolate-preview.component';
import { ChocolateDetailsComponent } from './chocolate-details/chocolate-details.component';

@NgModule({
  declarations: [ChocolateListComponent, ChocolatePreviewComponent, ChocolateDetailsComponent],
  imports: [CommonModule, FormsModule, ChocolateRoutingModule]
})
export class ChocolateModule {}
