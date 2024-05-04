import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThanksComponent } from './thanks.component';
import { ThanksRoutingModule } from './thanks-routing.module';

@NgModule({
  declarations: [ThanksComponent],
  imports: [CommonModule, ThanksRoutingModule],
  exports: [ThanksComponent],
})
export class ThanksModule {}
