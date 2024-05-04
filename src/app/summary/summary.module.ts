import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, SummaryRoutingModule],
  exports: [SummaryComponent],
})
export class SummaryModule {}
